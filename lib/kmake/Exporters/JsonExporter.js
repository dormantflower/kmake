"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonExporter = void 0;
const Exporter_1 = require("kmake/Exporters/Exporter");
const path = require("path");
class JsonExporter extends Exporter_1.Exporter {
    constructor(options) {
        super(options);
    }
    async exportSolution(project, from, to, platform, vrApi, options) {
        if (options.stdout) {
            this.writeStdout();
        }
        else {
            this.writeFile(path.resolve(to, project.getSafeName() + '.json'));
        }
        this.p('{');
        this.p('"includes":', 1);
        this.p('[', 1);
        for (let i = 0; i < project.getIncludeDirs().length; ++i) {
            const inc = path.relative(from, project.getIncludeDirs()[i]);
            if (i === project.getIncludeDirs().length - 1) {
                this.p('"' + inc.replace(/\\/g, '\\\\') + '"', 2);
            }
            else {
                this.p('"' + inc.replace(/\\/g, '\\\\') + '",', 2);
            }
        }
        this.p('],', 1);
        this.p('"libraries":', 1);
        this.p('[', 1);
        for (let i = 0; i < project.getLibs().length; ++i) {
            const lib = project.getLibs()[i];
            if (i === project.getLibs().length - 1) {
                this.p('"' + lib + '"', 2);
            }
            else {
                this.p('"' + lib + '",', 2);
            }
        }
        this.p('],', 1);
        this.p('"defines":', 1);
        this.p('[', 1);
        for (let i = 0; i < project.getDefines().length; ++i) {
            const def = project.getDefines()[i];
            if (i === project.getDefines().length - 1) {
                this.p('"' + def.value + '"', 2);
            }
            else {
                this.p('"' + def.value + '",', 2);
            }
        }
        this.p('],', 1);
        this.p('"files":', 1);
        this.p('[', 1);
        for (let i = 0; i < project.getFiles().length; ++i) {
            const file = project.getFiles()[i].file;
            const realfile = path.relative(from, file);
            if (i === project.getFiles().length - 1) {
                this.p('"' + realfile.replace(/\\/g, '\\\\') + '"', 2);
            }
            else {
                this.p('"' + realfile.replace(/\\/g, '\\\\') + '",', 2);
            }
        }
        this.p('],', 1);
        this.p('"kongDirs":', 1);
        this.p('[', 1);
        for (let i = 0; i < project.getKongDirs().length; ++i) {
            const kongDir = project.getKongDirs()[i];
            if (i === project.getKongDirs().length - 1) {
                this.p('"' + kongDir + '"', 2);
            }
            else {
                this.p('"' + kongDir + '",', 2);
            }
        }
        this.p('],', 1);
        this.p('"name": "' + project.getName() + '",', 1);
        this.p('"cStd": "' + project.getCStd() + '",', 1);
        this.p('"cFlags":', 1);
        this.p('[', 1);
        for (let i = 0; i < project.cFlags.length; ++i) {
            const cFlag = project.cFlags[i];
            if (i === project.cFlags.length - 1) {
                this.p('"' + cFlag + '"', 2);
            }
            else {
                this.p('"' + cFlag + '",', 2);
            }
        }
        this.p('],', 1);
        this.p('"cppStd": "' + project.getCppStd() + '",', 1);
        this.p('"cppFlags":', 1);
        this.p('[', 1);
        for (let i = 0; i < project.cppFlags.length; ++i) {
            const cppFlag = project.cppFlags[i];
            if (i === project.cppFlags.length - 1) {
                this.p('"' + cppFlag + '"', 2);
            }
            else {
                this.p('"' + cppFlag + '",', 2);
            }
        }
        this.p('],', 1);
        this.p('"debugDir": "' + project.getDebugDir().replace(/\\/g, '\\\\') + '"', 1);
        this.p('}');
        if (options.stdout) {
            this.closeStdout();
        }
        else {
            this.closeFile();
        }
    }
}
exports.JsonExporter = JsonExporter;
//# sourceMappingURL=JsonExporter.js.map