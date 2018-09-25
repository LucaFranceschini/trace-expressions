J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[3,12,3,19],"33":[3,20,3,26],"41":[3,12,3,27],"49":[3,12,3,27],"57":[3,12,3,27],"65":[5,14,5,18],"73":[6,3,6,6],"81":[6,17,6,20],"89":[6,3,6,21],"91":[6,3,6,16],"97":[6,3,6,22],"105":[7,3,7,6],"113":[7,11,7,17],"121":[7,3,7,18],"123":[7,3,7,10],"129":[7,3,7,19],"137":[5,32,8,2],"145":[5,32,8,2],"153":[5,32,8,2],"161":[5,32,8,2],"169":[5,32,8,2],"177":[5,14,8,3],"179":[5,14,5,31],"185":[5,14,8,3],"193":[5,14,8,3],"201":[10,1,10,7],"209":[10,15,10,19],"217":[10,1,10,20],"219":[10,1,10,14],"225":[10,1,10,21],"233":[1,1,11,1],"241":[1,1,11,1],"249":[1,1,11,1],"257":[5,32,8,2],"265":[5,32,8,2],"273":[1,1,11,1],"281":[1,1,11,1],"nBranches":0,"originalCodeFileName":"/home/davide/git/trace-expressions/examples/http/response end/transpiled/server.js","instrumentedCodeFileName":"/home/davide/git/trace-expressions/examples/http/response end/transpiled/server_jalangi_.js","code":"'use strict';\n\nvar http = require('http');\n\nvar server = http.createServer(function (req, res) {\n  res.writeHead(200);\n  res.end('okay');\n});\n\nserver.listen(8080);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(233, '/home/davide/git/trace-expressions/examples/http/response end/transpiled/server_jalangi_.js', '/home/davide/git/trace-expressions/examples/http/response end/transpiled/server.js');
            J$.N(241, 'http', http, 0);
            J$.N(249, 'server', server, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var http = J$.X1(57, J$.W(49, 'http', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'http', 21, false)), http, 3));
            var server = J$.X1(193, J$.W(185, 'server', J$.M(177, J$.R(65, 'http', http, 1), 'createServer', 0)(J$.T(169, function (req, res) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(137, arguments.callee, this, arguments);
                            arguments = J$.N(145, 'arguments', arguments, 4);
                            req = J$.N(153, 'req', req, 4);
                            res = J$.N(161, 'res', res, 4);
                            J$.X1(97, J$.M(89, J$.R(73, 'res', res, 0), 'writeHead', 0)(J$.T(81, 200, 22, false)));
                            J$.X1(129, J$.M(121, J$.R(105, 'res', res, 0), 'end', 0)(J$.T(113, 'okay', 21, false)));
                        } catch (J$e) {
                            J$.Ex(257, J$e);
                        } finally {
                            if (J$.Fr(265))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 137)), server, 3));
            J$.X1(225, J$.M(217, J$.R(201, 'server', server, 1), 'listen', 0)(J$.T(209, 8080, 22, false)));
        } catch (J$e) {
            J$.Ex(273, J$e);
        } finally {
            if (J$.Sr(281)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
