J$.iids = {"9":[1,1,1,13],"17":[1,1,1,14],"25":[3,12,3,19],"33":[3,20,3,26],"41":[3,12,3,27],"49":[3,12,3,27],"57":[3,12,3,27],"65":[6,12,6,18],"73":[6,23,6,28],"81":[6,29,6,34],"89":[6,19,6,35],"97":[6,12,6,36],"105":[6,12,6,36],"113":[6,12,6,36],"121":[8,14,8,18],"129":[10,2,10,5],"137":[10,10,10,14],"145":[10,2,10,15],"147":[10,2,10,9],"153":[10,2,10,16],"161":[8,32,11,2],"169":[8,32,11,2],"177":[8,32,11,2],"185":[8,32,11,2],"193":[8,32,11,2],"201":[8,14,11,3],"203":[8,14,8,31],"209":[8,14,11,3],"217":[8,14,11,3],"225":[13,1,13,7],"233":[13,15,13,19],"241":[13,1,13,20],"243":[13,1,13,14],"249":[13,1,13,21],"257":[1,1,14,1],"265":[1,1,14,1],"273":[1,1,14,1],"281":[1,1,14,1],"289":[8,32,11,2],"297":[8,32,11,2],"305":[1,1,14,1],"313":[1,1,14,1],"nBranches":0,"originalCodeFileName":"/home/davide/TechRep/programming18/git/trace-expressions/examples/http/unconsumed data/transpiled/server.js","instrumentedCodeFileName":"/home/davide/TechRep/programming18/git/trace-expressions/examples/http/unconsumed data/transpiled/server_jalangi_.js","code":"'use strict';\n\nvar http = require('http');\n\n// prepare (a lot of) data to send in replies\nvar data = String(new Array(10000));\n\nvar server = http.createServer(function (req, res) {\n\t// just send data\n\tres.end(data);\n});\n\nserver.listen(8080);\n"};
jalangiLabel1:
    while (true) {
        try {
            J$.Se(257, '/home/davide/TechRep/programming18/git/trace-expressions/examples/http/unconsumed data/transpiled/server_jalangi_.js', '/home/davide/TechRep/programming18/git/trace-expressions/examples/http/unconsumed data/transpiled/server.js');
            J$.N(265, 'http', http, 0);
            J$.N(273, 'data', data, 0);
            J$.N(281, 'server', server, 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var http = J$.X1(57, J$.W(49, 'http', J$.F(41, J$.R(25, 'require', require, 2), 0)(J$.T(33, 'http', 21, false)), http, 3));
            var data = J$.X1(113, J$.W(105, 'data', J$.F(97, J$.R(65, 'String', String, 2), 0)(J$.F(89, J$.R(73, 'Array', Array, 2), 1)(J$.T(81, 10000, 22, false))), data, 3));
            var server = J$.X1(217, J$.W(209, 'server', J$.M(201, J$.R(121, 'http', http, 1), 'createServer', 0)(J$.T(193, function (req, res) {
                jalangiLabel0:
                    while (true) {
                        try {
                            J$.Fe(161, arguments.callee, this, arguments);
                            arguments = J$.N(169, 'arguments', arguments, 4);
                            req = J$.N(177, 'req', req, 4);
                            res = J$.N(185, 'res', res, 4);
                            J$.X1(153, J$.M(145, J$.R(129, 'res', res, 0), 'end', 0)(J$.R(137, 'data', data, 1)));
                        } catch (J$e) {
                            J$.Ex(289, J$e);
                        } finally {
                            if (J$.Fr(297))
                                continue jalangiLabel0;
                            else
                                return J$.Ra();
                        }
                    }
            }, 12, false, 161)), server, 3));
            J$.X1(249, J$.M(241, J$.R(225, 'server', server, 1), 'listen', 0)(J$.T(233, 8080, 22, false)));
        } catch (J$e) {
            J$.Ex(305, J$e);
        } finally {
            if (J$.Sr(313)) {
                J$.L();
                continue jalangiLabel1;
            } else {
                J$.L();
                break jalangiLabel1;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
