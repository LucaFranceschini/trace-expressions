J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[14,12,14,19],"33":[14,20,14,26],"41":[14,12,14,27],"49":[14,12,14,27],"57":[14,12,14,27],"65":[16,14,16,18],"73":[17,2,17,9],"81":[17,14,17,55],"89":[17,2,17,56],"91":[17,2,17,13],"97":[17,2,17,57],"105":[18,2,18,9],"113":[18,14,18,45],"121":[18,2,18,46],"123":[18,2,18,13],"129":[18,2,18,47],"137":[19,2,19,5],"145":[19,16,19,19],"153":[19,2,19,20],"155":[19,2,19,15],"161":[19,2,19,21],"169":[20,2,20,5],"177":[21,10,21,17],"185":[21,22,21,37],"193":[21,10,21,38],"195":[21,10,21,21],"201":[21,10,21,38],"209":[21,3,21,39],"217":[20,10,22,3],"225":[20,10,22,3],"233":[20,10,22,3],"241":[20,2,22,4],"243":[20,2,20,9],"249":[20,2,22,5],"257":[16,32,23,2],"265":[16,32,23,2],"273":[16,32,23,2],"281":[16,32,23,2],"289":[16,32,23,2],"297":[16,14,23,3],"299":[16,14,16,31],"305":[16,14,23,3],"313":[16,14,23,3],"321":[25,1,25,7],"329":[25,15,25,19],"337":[25,1,25,20],"339":[25,1,25,14],"345":[25,1,25,21],"353":[1,1,25,21],"361":[1,1,25,21],"369":[1,1,25,21],"377":[20,10,22,3],"385":[20,10,22,3],"393":[16,32,23,2],"401":[16,32,23,2],"409":[1,1,25,21],"417":[1,1,25,21],"nBranches":0,"originalCodeFileName":"/home/davide/TechRep/programming18/git/trace-expressions/examples/http/write head/after end/transpiled/correctServer.js","instrumentedCodeFileName":"/home/davide/TechRep/programming18/git/trace-expressions/examples/http/write head/after end/transpiled/correctServer_jalangi_.js","code":"'use strict';\n\n/*\nClass http.ServerResponse\nmethod response.writeHead(statusCode[, statusMessage][, headers])\n\nThis method must only be called once on a message and it must be called before response.end() is called.\n\nIf response.write() or response.end() are called before calling this, the implicit/mutable headers will be calculated and call this function.\n\nWhen headers have been set with response.setHeader(), they will be merged with any headers passed to response.writeHead(), with the headers passed to response.writeHead() given precedence.\n*/\n\nvar http = require('http');\n\nvar server = http.createServer(function (req, res) {\n\tconsole.log('request received, preparing response...');\n\tconsole.log('setting status code to 200...');\n\tres.writeHead(200);\n\tres.end(function () {\n\t\treturn console.log('response sent');\n\t});\n});\n\nserver.listen(8080);"};
jalangiLabel2:
    while (true) {
        try {
            J$.Se(353, '/home/davide/TechRep/programming18/git/trace-expressions/examples/http/write head/after end/transpiled/correctServer_jalangi_.js', '/home/davide/TechRep/programming18/git/trace-expressions/examples/http/write head/after end/transpiled/correctServer.js');
            J$.N(361, 'http', http, 0);
            J$.N(369, 'server', server, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var http = J$.X1(57, J$.W(49, 'http', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'http', 21, false)), http, 3));
            var server = J$.X1(313, J$.W(305, 'server', J$.M(297, J$.R(65, 'http', http, 1), 'createServer', 0)(J$.T(289, function (req, res) {
                jalangiLabel1:
                    while (true) {
                        try {
                            J$.Fe(257, arguments.callee, this, arguments);
                            arguments = J$.N(265, 'arguments', arguments, 4);
                            req = J$.N(273, 'req', req, 4);
                            res = J$.N(281, 'res', res, 4);
                            J$.X1(97, J$.M(89, J$.R(73, 'console', console, 2), 'log', 0)(J$.T(81, 'request received, preparing response...', 21, false)));
                            J$.X1(129, J$.M(121, J$.R(105, 'console', console, 2), 'log', 0)(J$.T(113, 'setting status code to 200...', 21, false)));
                            J$.X1(161, J$.M(153, J$.R(137, 'res', res, 0), 'writeHead', 0)(J$.T(145, 200, 22, false)));
                            J$.X1(249, J$.M(241, J$.R(169, 'res', res, 0), 'end', 0)(J$.T(233, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(217, arguments.callee, this, arguments);
                                            arguments = J$.N(225, 'arguments', arguments, 4);
                                            return J$.X1(209, J$.Rt(201, J$.M(193, J$.R(177, 'console', console, 2), 'log', 0)(J$.T(185, 'response sent', 21, false))));
                                        } catch (J$e) {
                                            J$.Ex(377, J$e);
                                        } finally {
                                            if (J$.Fr(385))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 217)));
                        } catch (J$e) {
                            J$.Ex(393, J$e);
                        } finally {
                            if (J$.Fr(401))
                                continue jalangiLabel1;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 257)), server, 3));
            J$.X1(345, J$.M(337, J$.R(321, 'server', server, 1), 'listen', 0)(J$.T(329, 8080, 22, false)));
        } catch (J$e) {
            J$.Ex(409, J$e);
        } finally {
            if (J$.Sr(417)) {
                J$.L();
                continue jalangiLabel2;
            } else {
                J$.L();
                break jalangiLabel2;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
