import * as Yup from 'yup';

export default async (req, res, next) => {
  try {
    const schema = Yup.object().shape({
      titulo: Yup.string().required(),
      descricao: Yup.string().required(),
      localizacao: Yup.string().required(),
      data_hora: Yup.date().required(),
      banner_id: Yup.number()
        .required()
        .integer(),
    });

    await schema.validate(req.body, { abortEarly: false });

    return next();
  } catch (err) {
    return res
      .status(400)
      .json({ error: 'Validation fails', messages: err.inner });
  }
};
