J$.iids = {"9":[1,1,1,13],"10":[13,14,13,46],"17":[1,1,1,14],"18":[16,22,16,47],"25":[10,12,10,19],"33":[10,20,10,26],"41":[10,12,10,27],"49":[10,12,10,27],"57":[10,12,10,27],"65":[12,14,12,18],"73":[13,2,13,9],"81":[13,14,13,17],"89":[13,14,13,24],"97":[13,27,13,46],"105":[13,2,13,47],"107":[13,2,13,13],"113":[13,2,13,48],"121":[14,2,14,5],"129":[14,18,14,24],"137":[14,2,14,25],"139":[14,2,14,17],"145":[14,2,14,26],"153":[15,2,15,5],"161":[15,9,15,15],"169":[16,10,16,17],"177":[16,22,16,39],"185":[16,42,16,47],"193":[16,10,16,48],"195":[16,10,16,21],"201":[16,10,16,48],"209":[16,3,16,49],"217":[15,17,17,3],"225":[15,17,17,3],"233":[15,17,17,3],"241":[15,17,17,3],"249":[15,2,17,4],"251":[15,2,15,8],"257":[15,2,17,5],"265":[18,2,18,5],"273":[18,9,18,14],"281":[19,10,19,17],"289":[19,22,19,36],"297":[19,10,19,37],"299":[19,10,19,21],"305":[19,10,19,37],"313":[19,3,19,38],"321":[18,16,20,3],"329":[18,16,20,3],"337":[18,16,20,3],"345":[18,2,20,4],"347":[18,2,18,8],"353":[18,2,20,5],"361":[22,2,22,5],"369":[22,2,22,11],"371":[22,2,22,9],"377":[22,2,22,12],"385":[12,32,23,2],"393":[12,32,23,2],"401":[12,32,23,2],"409":[12,32,23,2],"417":[12,32,23,2],"425":[12,14,23,3],"427":[12,14,12,31],"433":[12,14,23,3],"441":[12,14,23,3],"449":[25,1,25,7],"457":[25,15,25,19],"465":[25,1,25,20],"467":[25,1,25,14],"473":[25,1,25,21],"481":[1,1,26,1],"489":[1,1,26,1],"497":[1,1,26,1],"505":[15,17,17,3],"513":[15,17,17,3],"521":[18,16,20,3],"529":[18,16,20,3],"537":[12,32,23,2],"545":[12,32,23,2],"553":[1,1,26,1],"561":[1,1,26,1],"nBranches":0,"originalCodeFileName":"/home/davide/TechRep/programming18/git/trace-expressions/examples/http/omitted body/head request/transpiled/server.js","instrumentedCodeFileName":"/home/davide/TechRep/programming18/git/trace-expressions/examples/http/omitted body/head request/transpiled/server_jalangi_.js","code":"'use strict';\n\n/*\nClass http.ServerResponse\nmethod response.write(chunk[, encoding][, callback])\n\nNote that in the http module, the response body is omitted when the request is a HEAD request. Similarly, the 204 and 304 responses must not include a message body.\n*/\n\nvar http = require('http');\n\nvar server = http.createServer(function (req, res) {\n\tconsole.log(req.method + ' request received');\n\treq.setEncoding('utf8');\n\treq.on('data', function (chunk) {\n\t\treturn console.log('received data: ' + chunk);\n\t});\n\treq.on('end', function () {\n\t\treturn console.log('no more data');\n\t});\n\n\tres.end();\n});\n\nserver.listen(8080);\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(481, '/home/davide/TechRep/programming18/git/trace-expressions/examples/http/omitted body/head request/transpiled/server_jalangi_.js', '/home/davide/TechRep/programming18/git/trace-expressions/examples/http/omitted body/head request/transpiled/server.js');
            J$.N(489, 'http', http, 0);
            J$.N(497, 'server', server, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var http = J$.X1(57, J$.W(49, 'http', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'http', 21, false)), http, 3));
            var server = J$.X1(441, J$.W(433, 'server', J$.M(425, J$.R(65, 'http', http, 1), 'createServer', 0)(J$.T(417, function (req, res) {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(385, arguments.callee, this, arguments);
                            arguments = J$.N(393, 'arguments', arguments, 4);
                            req = J$.N(401, 'req', req, 4);
                            res = J$.N(409, 'res', res, 4);
                            J$.X1(113, J$.M(105, J$.R(73, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.G(89, J$.R(81, 'req', req, 0), 'method', 0), J$.T(97, ' request received', 21, false), 0)));
                            J$.X1(145, J$.M(137, J$.R(121, 'req', req, 0), 'setEncoding', 0)(J$.T(129, 'utf8', 21, false)));
                            J$.X1(257, J$.M(249, J$.R(153, 'req', req, 0), 'on', 0)(J$.T(161, 'data', 21, false), J$.T(241, function (chunk) {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(217, arguments.callee, this, arguments);
                                            arguments = J$.N(225, 'arguments', arguments, 4);
                                            chunk = J$.N(233, 'chunk', chunk, 4);
                                            return J$.X1(209, J$.Rt(201, J$.M(193, J$.R(169, 'console', console, 2), 'log', 0)(J$.B(18, '+', J$.T(177, 'received data: ', 21, false), J$.R(185, 'chunk', chunk, 0), 0))));
                                        } catch (J$e) {
                                            J$.Ex(505, J$e);
                                        } finally {
                                            if (J$.Fr(513))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 217)));
                            J$.X1(353, J$.M(345, J$.R(265, 'req', req, 0), 'on', 0)(J$.T(273, 'end', 21, false), J$.T(337, function () {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(321, arguments.callee, this, arguments);
                                            arguments = J$.N(329, 'arguments', arguments, 4);
                                            return J$.X1(313, J$.Rt(305, J$.M(297, J$.R(281, 'console', console, 2), 'log', 0)(J$.T(289, 'no more data', 21, false))));
                                        } catch (J$e) {
                                            J$.Ex(521, J$e);
                                        } finally {
                                            if (J$.Fr(529))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 321)));
                            J$.X1(377, J$.M(369, J$.R(361, 'res', res, 0), 'end', 0)());
                        } catch (J$e) {
                            J$.Ex(537, J$e);
                        } finally {
                            if (J$.Fr(545))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 385)), server, 3));
            J$.X1(473, J$.M(465, J$.R(449, 'server', server, 1), 'listen', 0)(J$.T(457, 8080, 22, false)));
        } catch (J$e) {
            J$.Ex(553, J$e);
        } finally {
            if (J$.Sr(561)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
