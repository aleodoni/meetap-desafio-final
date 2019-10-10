import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { MdPhotoCamera } from 'react-icons/md';

import api from '~/service/api';
import { Container } from './styles';

export default function BannerInput() {
  const { fieldName, defaultValue, registerField } = useField('banner');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: fieldName,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current, fieldName]); //eslint-disable-line

  async function handleChange(e) {
    console.tron.log('MUDOU');
    const data = new FormData();
    data.append('file', e.target.files[0]);
    const response = await api.post('files', data);
    const { id, url } = response.data;
    setFile(id);
    setPreview(url);
  }

  function generatePreview() {
    if (preview) {
      return (
        <div className="preview">
          <img src={preview} alt="" />
        </div>
      );
    } else {
      return (
        <div>
          <MdPhotoCamera size={60} />
          <h2>Selecionar imagem</h2>
        </div>
      );
    }
  }

  return (
    <Container>
      <label htmlFor="banner">
        {generatePreview()}
        <input
          type="file"
          id="banner"
          accept="image/*"
          data-file={file}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}
