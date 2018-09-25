J$.iids = {"8":[9,20,9,49],"9":[1,1,1,13],"10":[29,3,29,13],"16":[30,7,30,30],"17":[1,1,1,14],"25":[9,20,9,26],"26":[29,3,29,13],"33":[9,27,9,34],"34":[30,7,30,30],"41":[9,27,9,39],"42":[31,16,31,34],"49":[9,40,9,41],"50":[31,15,31,42],"57":[9,27,9,42],"58":[32,16,32,39],"65":[9,20,9,43],"66":[32,16,32,56],"73":[9,47,9,49],"74":[32,16,32,63],"81":[9,20,9,49],"82":[32,16,32,74],"89":[9,20,9,49],"90":[32,77,32,96],"97":[10,12,10,19],"98":[32,16,32,96],"105":[10,20,10,26],"113":[10,12,10,27],"121":[10,12,10,27],"129":[10,12,10,27],"137":[12,12,12,27],"145":[12,12,12,27],"153":[12,12,12,27],"161":[16,21,16,27],"169":[16,39,16,43],"177":[16,21,16,44],"179":[16,21,16,38],"185":[15,11,17,3],"193":[18,10,18,16],"201":[19,8,19,14],"209":[14,15,20,2],"217":[14,15,20,2],"225":[14,15,20,2],"233":[22,18,22,19],"241":[22,13,22,19],"249":[22,13,22,19],"257":[23,16,23,17],"265":[23,16,23,17],"273":[23,16,23,17],"281":[27,12,27,16],"289":[27,25,27,32],"297":[27,12,27,33],"299":[27,12,27,24],"305":[27,12,27,33],"313":[27,12,27,33],"321":[28,2,28,5],"329":[28,10,28,14],"345":[29,3,29,11],"369":[29,3,29,14],"377":[30,7,30,15],"385":[30,18,30,30],"393":[30,32,30,42],"401":[30,43,30,50],"409":[30,52,30,53],"417":[30,32,30,54],"425":[30,32,30,55],"433":[31,16,31,20],"441":[31,16,31,26],"443":[31,16,31,24],"449":[31,29,31,34],"457":[31,38,31,42],"465":[31,15,31,42],"473":[31,15,31,42],"481":[32,4,32,11],"489":[32,16,32,28],"497":[32,31,32,39],"505":[32,42,32,56],"513":[32,59,32,63],"521":[32,66,32,74],"529":[32,77,32,89],"537":[32,92,32,96],"545":[32,4,32,97],"547":[32,4,32,15],"553":[32,4,32,98],"561":[33,4,33,11],"569":[33,4,33,18],"571":[33,4,33,16],"577":[33,4,33,19],"585":[28,16,35,3],"593":[28,16,35,3],"601":[28,16,35,3],"609":[28,16,35,3],"617":[28,2,35,4],"619":[28,2,28,9],"625":[28,2,35,5],"633":[36,2,36,5],"641":[36,9,36,16],"649":[37,10,37,17],"657":[37,24,37,25],"665":[37,24,37,33],"673":[37,10,37,34],"675":[37,10,37,23],"681":[37,10,37,34],"689":[37,3,37,35],"697":[36,18,38,3],"705":[36,18,38,3],"713":[36,18,38,3],"721":[36,18,38,3],"729":[36,2,38,4],"731":[36,2,36,8],"737":[36,2,38,5],"745":[26,1,39,2],"753":[26,1,39,2],"761":[26,1,39,2],"769":[41,9,41,13],"777":[41,9,41,19],"779":[41,9,41,17],"785":[41,9,41,19],"793":[41,1,41,20],"801":[42,1,42,8],"809":[42,1,42,10],"817":[42,1,42,11],"825":[1,1,43,1],"833":[1,1,43,1],"841":[1,1,43,1],"849":[1,1,43,1],"857":[1,1,43,1],"865":[1,1,43,1],"873":[1,1,43,1],"881":[26,1,39,2],"889":[1,1,43,1],"897":[30,3,34,4],"905":[28,16,35,3],"913":[28,16,35,3],"921":[36,18,38,3],"929":[36,18,38,3],"937":[26,1,39,2],"945":[26,1,39,2],"953":[1,1,43,1],"961":[1,1,43,1],"nBranches":4,"originalCodeFileName":"/home/davide/git/trace-expressions/examples/http/content length/transpiled/benchmark-client.js","instrumentedCodeFileName":"/home/davide/git/trace-expressions/examples/http/content length/transpiled/benchmark-client_jalangi_.js","code":"'use strict';\n\n/*\nClass: http.ClientRequest\n\nNote: Node.js does not check whether Content-Length and the length of the body which has been transmitted are equal or not.\n*/\n\nvar max_requests = Number(process.argv[2]) || 10;\nvar http = require('http');\n\nvar data = \"hello, world!\";\n\nvar options = {\n\theaders: {\n\t\t'content-length': Buffer.byteLength(data)\n\t},\n\tmethod: 'POST',\n\tport: '8080'\n};\n\nvar time0 = void 0;\nvar requests = 0;\n\n/* ignores server response */\nfunction request() {\n\tvar req = http.request(options);\n\treq.end(data, function () {\n\t\trequests++;\n\t\tif (requests < max_requests) setTimeout(request, 0);else {\n\t\t\tvar time = (Date.now() - time0) / 1000;\n\t\t\tconsole.log('Requests: ' + requests + ' Time (sec):' + time + ' RPS: ' + max_requests / time);\n\t\t\tprocess.exit();\n\t\t}\n\t});\n\treq.on('error', function (e) {\n\t\treturn console.error(e.message);\n\t});\n}\n\ntime0 = Date.now();\nrequest();\n"};
jalangiLabel3:
    while (true) {
        try {
            J$.Se(825, '/home/davide/git/trace-expressions/examples/http/content length/transpiled/benchmark-client_jalangi_.js', '/home/davide/git/trace-expressions/examples/http/content length/transpiled/benchmark-client.js');
            function request() {
                jalangiLabel2:
                    while (true) {
                        try {
                            J$.Fe(745, arguments.callee, this, arguments);
                            arguments = J$.N(753, 'arguments', arguments, 4);
                            J$.N(761, 'req', req, 0);
                            var req = J$.X1(313, J$.W(305, 'req', J$.M(297, J$.R(281, 'http', http, 1), 'request', 0)(J$.R(289, 'options', options, 1)), req, 1));
                            J$.X1(625, J$.M(617, J$.R(321, 'req', req, 0), 'end', 0)(J$.R(329, 'data', data, 1), J$.T(609, function () {
                                jalangiLabel0:
                                    while (true) {
                                        try {
                                            J$.Fe(585, arguments.callee, this, arguments);
                                            arguments = J$.N(593, 'arguments', arguments, 4);
                                            J$.N(601, 'time', time, 0);
                                            J$.X1(369, J$.B(26, '-', requests = J$.W(353, 'requests', J$.B(18, '+', J$.U(10, '+', J$.R(345, 'requests', requests, 1)), J$.T(337, 1, 22, false), 0), requests, 2), J$.T(361, 1, 22, false), 0));
                                            if (J$.X1(897, J$.C(16, J$.B(34, '<', J$.R(377, 'requests', requests, 1), J$.R(385, 'max_requests', max_requests, 1), 0))))
                                                J$.X1(425, J$.F(417, J$.R(393, 'setTimeout', setTimeout, 2), 0)(J$.R(401, 'request', request, 1), J$.T(409, 0, 22, false)));
                                            else {
                                                var time = J$.X1(473, J$.W(465, 'time', J$.B(50, '/', J$.B(42, '-', J$.M(441, J$.R(433, 'Date', Date, 2), 'now', 0)(), J$.R(449, 'time0', time0, 1), 0), J$.T(457, 1000, 22, false), 0), time, 1));
                                                J$.X1(553, J$.M(545, J$.R(481, 'console', console, 2), 'log', 0)(J$.B(98, '+', J$.B(82, '+', J$.B(74, '+', J$.B(66, '+', J$.B(58, '+', J$.T(489, 'Requests: ', 21, false), J$.R(497, 'requests', requests, 1), 0), J$.T(505, ' Time (sec):', 21, false), 0), J$.R(513, 'time', time, 0), 0), J$.T(521, ' RPS: ', 21, false), 0), J$.B(90, '/', J$.R(529, 'max_requests', max_requests, 1), J$.R(537, 'time', time, 0), 0), 0)));
                                                J$.X1(577, J$.M(569, J$.R(561, 'process', process, 2), 'exit', 0)());
                                            }
                                        } catch (J$e) {
                                            J$.Ex(905, J$e);
                                        } finally {
                                            if (J$.Fr(913))
                                                continue jalangiLabel0;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 585)));
                            J$.X1(737, J$.M(729, J$.R(633, 'req', req, 0), 'on', 0)(J$.T(641, 'error', 21, false), J$.T(721, function (e) {
                                jalangiLabel1:
                                    while (true) {
                                        try {
                                            J$.Fe(697, arguments.callee, this, arguments);
                                            arguments = J$.N(705, 'arguments', arguments, 4);
                                            e = J$.N(713, 'e', e, 4);
                                            return J$.X1(689, J$.Rt(681, J$.M(673, J$.R(649, 'console', console, 2), 'error', 0)(J$.G(665, J$.R(657, 'e', e, 0), 'message', 0))));
                                        } catch (J$e) {
                                            J$.Ex(921, J$e);
                                        } finally {
                                            if (J$.Fr(929))
                                                continue jalangiLabel1;
                                            else
                                                return J$.Ra();
                                        }
                                    }
                            }, 12, false, 697)));
                        } catch (J$e) {
                            J$.Ex(937, J$e);
                        } finally {
                            if (J$.Fr(945))
                                continue jalangiLabel2;
                            else
                                return J$.Ra();
                        }
                    }
            }
            J$.N(833, 'max_requests', max_requests, 0);
            J$.N(841, 'http', http, 0);
            J$.N(849, 'data', data, 0);
            J$.N(857, 'options', options, 0);
            J$.N(865, 'time0', time0, 0);
            J$.N(873, 'requests', requests, 0);
            request = J$.N(889, 'request', J$.T(881, request, 12, false, 745), 0);
            J$.X1(17, J$.T(9, 'use strict', 21, false));
            var max_requests = J$.X1(89, J$.W(81, 'max_requests', J$.C(8, J$.F(65, J$.R(25, 'Number', Number, 2), 0)(J$.G(57, J$.G(41, J$.R(33, 'process', process, 2), 'argv', 0), J$.T(49, 2, 22, false), 4))) ? J$._() : J$.T(73, 10, 22, false), max_requests, 3));
            var http = J$.X1(129, J$.W(121, 'http', J$.F(113, J$.R(97, 'require', require, 2), 0)(J$.T(105, 'http', 21, false)), http, 3));
            var data = J$.X1(153, J$.W(145, 'data', J$.T(137, 'hello, world!', 21, false), data, 3));
            var options = J$.X1(225, J$.W(217, 'options', J$.T(209, {
                headers: J$.T(185, {
                    'content-length': J$.M(177, J$.R(161, 'Buffer', Buffer, 2), 'byteLength', 0)(J$.R(169, 'data', data, 1))
                }, 11, false),
                method: J$.T(193, 'POST', 21, false),
                port: J$.T(201, '8080', 21, false)
            }, 11, false), options, 3));
            var time0 = J$.X1(249, J$.W(241, 'time0', void J$.T(233, 0, 22, false), time0, 3));
            var requests = J$.X1(273, J$.W(265, 'requests', J$.T(257, 0, 22, false), requests, 3));
            J$.X1(793, time0 = J$.W(785, 'time0', J$.M(777, J$.R(769, 'Date', Date, 2), 'now', 0)(), time0, 2));
            J$.X1(817, J$.F(809, J$.R(801, 'request', request, 1), 0)());
        } catch (J$e) {
            J$.Ex(953, J$e);
        } finally {
            if (J$.Sr(961)) {
                J$.L();
                continue jalangiLabel3;
            } else {
                J$.L();
                break jalangiLabel3;
            }
        }
    }
// JALANGI DO NOT INSTRUMENT
