J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[3,12,3,19],"33":[3,20,3,26],"41":[3,12,3,27],"49":[3,12,3,27],"57":[3,12,3,27],"65":[5,14,5,18],"73":[6,2,6,9],"81":[6,14,6,41],"89":[6,43,6,46],"97":[6,43,6,54],"105":[6,55,6,71],"113":[6,43,6,72],"121":[6,2,6,73],"123":[6,2,6,13],"129":[6,2,6,74],"137":[7,2,7,5],"145":[7,9,7,15],"153":[8,10,8,17],"161":[8,22,8,51],"169":[8,53,8,58],"177":[8,53,8,65],"185":[8,10,8,66],"187":[8,10,8,21],"193":[8,10,8,66],"201":[8,3,8,67],"209":[7,17,9,3],"217":[7,17,9,3],"225":[7,17,9,3],"233":[7,17,9,3],"241":[7,2,9,4],"243":[7,2,7,8],"249":[7,2,9,5],"257":[10,2,10,5],"265":[10,9,10,14],"273":[11,10,11,13],"281":[11,18,11,22],"289":[11,10,11,23],"291":[11,10,11,17],"297":[11,10,11,23],"305":[11,3,11,24],"313":[10,16,12,3],"321":[10,16,12,3],"329":[10,16,12,3],"337":[10,2,12,4],"339":[10,2,10,8],"345":[10,2,12,5],"353":[5,32,13,2],"361":[5,32,13,2],"369":[5,32,13,2],"377":[5,32,13,2],"385":[5,32,13,2],"393":[5,14,13,3],"395":[5,14,5,31],"401":[5,14,13,3],"409":[5,14,13,3],"417":[15,1,15,7],"425":[15,15,15,19],"433":[15,1,15,20],"435":[15,1,15,14],"441":[15,1,15,21],"449":[1,1,16,1],"457":[1,1,16,1],"465":[1,1,16,1],"473":[7,17,9,3],"481":[7,17,9,3],"489":[10,16,12,3],"497":[10,16,12,3],"505":[5,32,13,2],"513":[5,32,13,2],"521":[1,1,16,1],"529":[1,1,16,1],"nBranches":0,"originalCodeFileName":"/home/davide/git/trace-expressions/examples/http/content length/transpiled/server.js","instrumentedCodeFileName":"/home/davide/git/trace-expressions/examples/http/content length/transpiled/server_jalangi_.js","code":"'use strict';\n\nvar http = require('http');\n\nvar server = http.createServer(function (req, res) {\n\tconsole.log('header content-length: %i', req.headers['content-length']);\n\treq.on('data', function (chunk) {\n\t\treturn console.log('received chunk of length %i', chunk.length);\n\t});\n\treq.on('end', function () {\n\t\treturn res.end('ok');\n\t});\n});\n\nserver.listen(8080);\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(449, '/home/davide/git/trace-expressions/examples/http/content length/transpiled/server_jalangi_.js', '/home/davide/git/trace-expressions/examples/http/content length/transpiled/server.js');
            J$.N(457, 'http', http, 0);
            J$.N(465, 'server', server, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var http = J$.X1(57, J$.W(49, 'http', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'http', 21, false)), http, 3));
            var server = J$.X1(409, J$.W(401, 'server', J$.M(393, J$.R(65, 'http', http, 1), 'createServer', 0)(J$.T(385, function (req, res) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(353, arguments.callee, this, arguments);
                            arguments = J$.N(361, 'arguments', arguments, 4);
                            req = J$.N(369, 'req', req, 4);
                            res = J$.N(377, 'res', res, 4);
                            J$.X1(129, J$.M(121, J$.R(73, 'console', console, 2), 'log', 0)(J$.T(81, 'header content-length: %i', 21, false), J$.G(113, J$.G(97, J$.R(89, 'req', req, 0), 'headers', 0), J$.T(105, 'content-length', 21, false), 4)));
                            J$.X1(249, J$.M(241, J$.R(137, 'req', req, 0), 'on', 0)(J$.T(145, 'data', 21, false), J$.T(233, function (chunk) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(209, arguments.callee, this, arguments);
                                            arguments = J$.N(217, 'arguments', arguments, 4);
                                            chunk = J$.N(225, 'chunk', chunk, 4);
                                            return J$.X1(201, J$.Rt(193, J$.M(185, J$.R(153, 'console', console, 2), 'log', 0)(J$.T(161, 'received chunk of length %i', 21, false), J$.G(177, J$.R(169, 'chunk', chunk, 0), 'length', 0))));
                                        } catch (J$e) {
                                            J$.Ex(473, J$e);
                                        } finally {
                                            if (J$.Fr(481))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 209)));
                            J$.X1(345, J$.M(337, J$.R(257, 'req', req, 0), 'on', 0)(J$.T(265, 'end', 21, false), J$.T(329, function () {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(313, arguments.callee, this, arguments);
                                            arguments = J$.N(321, 'arguments', arguments, 4);
                                            return J$.X1(305, J$.Rt(297, J$.M(289, J$.R(273, 'res', res, 0), 'end', 0)(J$.T(281, 'ok', 21, false))));
                                        } catch (J$e) {
                                            J$.Ex(489, J$e);
                                        } finally {
                                            if (J$.Fr(497))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 313)));
                        } catch (J$e) {
                            J$.Ex(505, J$e);
                        } finally {
                            if (J$.Fr(513))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 353)), server, 3));
            J$.X1(441, J$.M(433, J$.R(417, 'server', server, 1), 'listen', 0)(J$.T(425, 8080, 22, false)));
        } catch (J$e) {
            J$.Ex(521, J$e);
        } finally {
            if (J$.Sr(529)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
