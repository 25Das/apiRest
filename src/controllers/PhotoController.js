import multer from 'multer';
import multerConfig from '../config/multerConfig';
import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class PhotoController {
	store(req, res) {
		return upload(req, res, async error => {
			if (error) {
				return res.status(400).json({
					errors: [error.code],
				});
			}

			try {
				const { originalname, filename } = req.file;
				const { aluno_id } = req.body;
				const foto = await Photo.create({ originalname, filename, aluno_id });

				const { url, id } = foto;

				return res.json({ url, id, originalname, filename, aluno_id });
			} catch (e) {
				return res.status(400).json({
					errors: ['Aluno não existe'],
				});
			}
		});
	}
}

export default new PhotoController();
