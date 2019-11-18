const fs    = require('fs')
const path  = require('path')


/**
 * Implicitly overwrites the file if it exists, while creating the specified folder structure if it doesn't exist already
 * @param  {string} targetPath Target filepath for the specified content to be written to
 * @param  {string} content    content to be written to disk
 * @return {null}
 */
function writeFile(targetPath, content, options={}) {

	const defaults = {
		encoding: 	'utf8',
		flag: 		'w',
		mode: 		0o666,
		recursive: 	true,
	}

	options = Object.assign({}, defaults, options)

	const dirname = path.dirname(targetPath)

	if (!fs.existsSync(dirname)) {
		fs.mkdirSync(dirname, options)
	}


	if (fs.existsSync(targetPath)) {
	    fs.unlinkSync(targetPath)
	}

	fs.writeFileSync(targetPath, content, options)
}

module.exports = writeFile