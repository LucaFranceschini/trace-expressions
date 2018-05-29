J$.iids = {"9":[1,1,1,13],"10":[13,14,13,46],"17":[1,1,1,14],"25":[10,12,10,19],"33":[10,20,10,26],"41":[10,12,10,27],"49":[10,12,10,27],"57":[10,12,10,27],"65":[12,14,12,18],"73":[13,2,13,9],"81":[13,14,13,17],"89":[13,14,13,24],"97":[13,27,13,46],"105":[13,2,13,47],"107":[13,2,13,13],"113":[13,2,13,48],"121":[15,2,15,5],"129":[15,16,15,19],"137":[15,2,15,20],"139":[15,2,15,15],"145":[15,2,15,21],"153":[16,2,16,5],"161":[16,2,16,11],"163":[16,2,16,9],"169":[16,2,16,12],"177":[12,32,17,2],"185":[12,32,17,2],"193":[12,32,17,2],"201":[12,32,17,2],"209":[12,32,17,2],"217":[12,14,17,3],"219":[12,14,12,31],"225":[12,14,17,3],"233":[12,14,17,3],"241":[19,1,19,7],"249":[19,15,19,19],"257":[19,1,19,20],"259":[19,1,19,14],"265":[19,1,19,21],"273":[1,1,19,21],"281":[1,1,19,21],"289":[1,1,19,21],"297":[12,32,17,2],"305":[12,32,17,2],"313":[1,1,19,21],"321":[1,1,19,21],"nBranches":0,"originalCodeFileName":"/home/davide/TechRep/programming18/git/trace-expressions/examples/http/omitted body/304 response/transpiled/correctServer.js","instrumentedCodeFileName":"/home/davide/TechRep/programming18/git/trace-expressions/examples/http/omitted body/304 response/transpiled/correctServer_jalangi_.js","code":"'use strict';\n\n/*\nClass http.ServerResponse\nmethod response.write(chunk[, encoding][, callback])\n\nNote that in the http module, the response body is omitted when the request is a HEAD request. Similarly, the 204 and 304 responses must not include a message body.\n*/\n\nvar http = require('http');\n\nvar server = http.createServer(function (req, res) {\n\tconsole.log(req.method + ' request received');\n\n\tres.writeHead(304);\n\tres.end();\n});\n\nserver.listen(8080);"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(273, '/home/davide/TechRep/programming18/git/trace-expressions/examples/http/omitted body/304 response/transpiled/correctServer_jalangi_.js', '/home/davide/TechRep/programming18/git/trace-expressions/examples/http/omitted body/304 response/transpiled/correctServer.js');
            J$.N(281, 'http', http, 0);
            J$.N(289, 'server', server, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var http = J$.X1(57, J$.W(49, 'http', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'http', 21, false)), http, 3));
            var server = J$.X1(233, J$.W(225, 'server', J$.M(217, J$.R(65, 'http', http, 1), 'createServer', 0)(J$.T(209, function (req, res) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(177, arguments.callee, this, arguments);
                            arguments = J$.N(185, 'arguments', arguments, 4);
                            req = J$.N(193, 'req', req, 4);
                            res = J$.N(201, 'res', res, 4);
                            J$.X1(113, J$.M(105, J$.R(73, 'console', console, 2), 'log', 0)(J$.B(10, '+', J$.G(89, J$.R(81, 'req', req, 0), 'method', 0), J$.T(97, ' request received', 21, false), 0)));
                            J$.X1(145, J$.M(137, J$.R(121, 'res', res, 0), 'writeHead', 0)(J$.T(129, 304, 22, false)));
                            J$.X1(169, J$.M(161, J$.R(153, 'res', res, 0), 'end', 0)());
                        } catch (J$e) {
                            J$.Ex(297, J$e);
                        } finally {
                            if (J$.Fr(305))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 177)), server, 3));
            J$.X1(265, J$.M(257, J$.R(241, 'server', server, 1), 'listen', 0)(J$.T(249, 8080, 22, false)));
        } catch (J$e) {
            J$.Ex(313, J$e);
        } finally {
            if (J$.Sr(321)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
