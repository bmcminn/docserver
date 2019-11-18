
const fs        = require('fs')
const path      = require('path')
const glob      = require('./helpers/glob.js')
const writeFile = require('./helpers/writeFile.js')

const markdown = require('markdown-it')

const md = new markdown()

const rootPath      = process.cwd()
const docServerPath = path.join(process.cwd(), '.docserver')

// const STRIP_LENGTH  = process.cwd().length+1
const STRIP_LENGTH  = process.cwd().split(path.sep)


let tableOfContents = []


let filelist =
    glob(rootPath, [
        // /composer.json$/i,
        // /package.json$/i,
        /README.md$/i,
    ])
    .map((el, i) => {

        if (i > 12) {
            process.exit()
        }

        el.content      = fs.readFileSync(el.filepath).toString().trim()
        el.html         = md.render(el.content)
        el.title        = el.content.split('\n')[0].replace(/^#\s*/, '')

        el.renderFilename = el.title
            .replace(/[^\w\d\s]/g, ' ')
            .trim()
            .replace(/\s+/g, '-')



        el.renderPath   = path.join(docServerPath, 'module', el.renderFilename + '.html')

        console.debug('-----------------')
        console.debug(el)


        tableOfContents.push({
            title:       el.title,
            renderPath:  el.renderPath,
        })


        let template = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${el.title}</title>
</head>
<body>
    ${el.html}
</body>
</html>`


        writeFile(el.renderPath, template)

        // fs.writeFileSync(renderPath)


        // md.render('# markdown-it rulezz!') //

    })


console.log(tableOfContents)