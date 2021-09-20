"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('photo');

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
				const foto = await _Photo2.default.create({ originalname, filename, aluno_id });

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

exports. default = new PhotoController();
