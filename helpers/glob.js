const fs    = require('fs')
const path  = require('path')


function glob(globpath, filters=[], matchlist=[]) {

	fs.readdirSync(globpath)
		.map(filename => {

			let filepath 	= path.join(globpath, filename)
			let stats    	= fs.statSync(filepath)

			let res      	= {}

			res.filename 	= filename
			res.filepath 	= filepath
			res.parentDir   = globpath
			res.isDir 		= stats.isDirectory()
			res.isFile 		= stats.isFile()

			if (res.isDir) {
				matchlist = glob(res.filepath, filters, matchlist)
			}

			if (filters.some(el => el.test(filename.toLowerCase()))) {
				matchlist.push(res)
			}

		})

	return matchlist
}


module.exports = glob