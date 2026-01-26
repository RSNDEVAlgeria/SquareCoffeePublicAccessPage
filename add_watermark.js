
const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const srcDir = path.join(rootDir, 'src');
const indexHtml = path.join(rootDir, 'index.html');

const extensions = ['.ts', '.tsx', '.js', '.jsx', '.css', '.html'];

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            arrayOfFiles.push(path.join(dirPath, "/", file));
        }
    });

    return arrayOfFiles;
}

const files = getAllFiles(srcDir);
if (fs.existsSync(indexHtml)) {
    files.push(indexHtml);
}

files.forEach(file => {
    const ext = path.extname(file);
    if (!extensions.includes(ext)) return;

    let content = fs.readFileSync(file, 'utf8');
    const commentJS = "// made by leyn.cx\n";
    const commentCSS = "/* made by leyn.cx */\n";
    const commentHTML = "<!-- made by leyn.cx -->\n";

    let commentToAdd = "";
    if (ext === '.html') commentToAdd = commentHTML;
    else if (ext === '.css') commentToAdd = commentCSS;
    else commentToAdd = commentJS;

    if (!content.includes("made by leyn.cx")) {
        fs.writeFileSync(file, commentToAdd + content);
        console.log(`Updated ${file}`);
    }
});
// made by leyn.cx