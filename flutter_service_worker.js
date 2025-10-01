'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "653f86e71295ec5bec32d9117d39ca90",
"assets/AssetManifest.bin.json": "42dc2cea5851f846e525b2d8365f8e7a",
"assets/AssetManifest.json": "9e67083fc7e0b64609ee66bc031fd5db",
"assets/assets/audio/camera.mp3": "eef2ae9cdcdc7e4daa3d2c08b4421dd7",
"assets/assets/backgrounds/blue_circle.png": "85a58493a130ef225984d32543bfb2ea",
"assets/assets/backgrounds/circle_object.png": "c3fc60d7fbd918163a755d008dc1b339",
"assets/assets/backgrounds/DORCO_logo_ENG_Black.png": "2099f7a6ab293c4c8fc9957fd65c51f5",
"assets/assets/backgrounds/DORCO_logo_ENG_Red.png": "d8f96993bbf8eccf0d426d229a434e78",
"assets/assets/backgrounds/DORCO_logo_ENG_White.png": "26a4fbf22341d03668bdff4cc3abfef7",
"assets/assets/backgrounds/header_lines.png": "8220dd3095490bd45830c9dd6d37688a",
"assets/assets/backgrounds/header_logo.png": "3cdf227bccbab6f8b8e3bd9f01274179",
"assets/assets/backgrounds/landing_background.png": "7e78ad77d0dbe8ffbea59e4c5f43063e",
"assets/assets/backgrounds/lovedorco_logo.png": "7f798821e65442d1275813ef5ac807d1",
"assets/assets/backgrounds/lovedorco_logo_2.png": "ce42e1839ba1c1d45c2904c74d92bf6c",
"assets/assets/backgrounds/photobooth_background.jpg": "dd6e71ce5a4b470c3c0f56100a0ac3d1",
"assets/assets/backgrounds/red_box.png": "7c63437873ed4d2719260ea71e9ceffc",
"assets/assets/backgrounds/yellow_bar.png": "8add88e180c01adf792e6464d7a37bc3",
"assets/assets/backgrounds/yellow_plus.png": "1447836449833441a890d2d66900f8bd",
"assets/assets/icons/android_icon.png": "7a959290a5b1131dc1774cffc5064efe",
"assets/assets/icons/back_button_icon.png": "fc99ab86653c09e2e01f3182b808f203",
"assets/assets/icons/camera_button_icon.png": "0b684d1768203c5395bc0f4fdd6481fd",
"assets/assets/icons/dash_icon.png": "32f278d505765547c000486d22dfe1f7",
"assets/assets/icons/delete_icon.png": "5ce2305e34dc18063308b1040a3d13a6",
"assets/assets/icons/dino_icon.png": "d876fbd329ceb41719c8e3fb800bf09d",
"assets/assets/icons/dorco_icon.png": "7f3ac793adb23fd689a19615c7257b84",
"assets/assets/icons/eyewear_icon.png": "2af05ce331c7a302b4272df945959e25",
"assets/assets/icons/firebase_icon.png": "b9c992f2013dbe31c03b7c2ea07fdf47",
"assets/assets/icons/flip_camera_button_icon.png": "5d07cb01a7431fa7161e8ebb8fe3869c",
"assets/assets/icons/flutter_icon.png": "d49b7036e39b0272562db977d7afb357",
"assets/assets/icons/food_icon.png": "8024439402f89fc233a34eb8cb25ad81",
"assets/assets/icons/google_icon.png": "1aa99c190fb74a4ba6d9985283292b54",
"assets/assets/icons/go_next_button_icon.png": "e2b629942294cb650800afeb61fcdf79",
"assets/assets/icons/hats_icon.png": "5c00b92a73e466f2303a84ac78b17252",
"assets/assets/icons/retake_button_icon.png": "473283f5ceacdd830f566c70ee56bbbd",
"assets/assets/icons/shapes_icon.png": "b2b84a04e93b75285c9bb720a73daac8",
"assets/assets/icons/sparky_icon.png": "8bdd9793ea6752d028ec221972ff82aa",
"assets/assets/icons/stickers_button_icon.png": "78e74e40f847a694398beec7f2a031e7",
"assets/assets/icons/sticker_icon.png": "c902b8a8ce31cff0eb8152f02b8d7d86",
"assets/assets/images/android.png": "be514af38d2ecce15b150ca124a70499",
"assets/assets/images/android_spritesheet.png": "d9e7470f57e6c793098d21fdc8fe8b3f",
"assets/assets/images/dash.png": "cbb0d6bb1baef4a67f88f2a5bb65e1ff",
"assets/assets/images/dash_spritesheet.png": "f0412af469b2fea1f34dacd1125a564b",
"assets/assets/images/dino.png": "52579b8f3946ea76354e0f3f3afb08ef",
"assets/assets/images/dino_spritesheet.png": "aee0d9da6e571df2ddd6c59b98e45fab",
"assets/assets/images/error_photo_desktop.png": "a103f4481d4edbe45203672a597649f1",
"assets/assets/images/error_photo_mobile.png": "735d9525df4be4d1da548bb3b2ffd46d",
"assets/assets/images/photo_frame_download.png": "7fe24b9b1d0b4039e1c4d358eac74cae",
"assets/assets/images/photo_frame_download_v1.png": "a9d8381319cfecde6302bb6e8c198a3b",
"assets/assets/images/photo_frame_mobile_download.png": "e2e37859656b66c2fcf54d443067c03b",
"assets/assets/images/photo_frame_mobile_download_v1.png": "2ecf66c3029ee1906bbe78521f3fc67e",
"assets/assets/images/photo_frame_spritesheet_landscape.jpg": "e32dba50a0c2d5b0c41f90bb9d2c3869",
"assets/assets/images/photo_frame_spritesheet_portrait.png": "06f5c2ef05cea9d0f379547f6a4cd181",
"assets/assets/images/photo_frame_spritesheet_portrait_v1.png": "06f5c2ef05cea9d0f379547f6a4cd181",
"assets/assets/images/photo_indicator_spritesheet.png": "5eb589e14bc9b29b9515e85d717e7715",
"assets/assets/images/photo_placeholder.png": "0930daa41d5b3b0d26dcaacedac28efd",
"assets/assets/images/sparky.png": "96b3a85907caa64b783432f94ea6ce2c",
"assets/assets/images/sparky_spritesheet.png": "c8e571e51d490933db6783597cdc95f9",
"assets/assets/props/dorco/01_dorco_v1.png": "d7208bab019b3403bf7c15d2f68abda8",
"assets/assets/props/dorco/02_dorco_v1.png": "7cef2c66d23e9cfd6b56fd3d845fd74c",
"assets/assets/props/dorco/03_dorco_v1.png": "e7464c9262e3ce57dfee7c35005de6af",
"assets/assets/props/dorco/04_dorco_v1.png": "9250609437d774a35d74505778c59245",
"assets/assets/props/dorco/05_dorco_v1.png": "c6a5f891ccabfaba51e7e74c0cf2d955",
"assets/assets/props/dorco/06_dorco_v1.png": "cfd1cde56eef35e5ce3363294f3ce974",
"assets/assets/props/dorco/07_dorco_v1.png": "6e4d47e296e94e0a5c69cbe9ad6adc0f",
"assets/assets/props/dorco/08_dorco_v1.png": "27ab5f90220f91c201cb17a3b796b4d0",
"assets/assets/props/dorco/09_dorco_v1.png": "a909e47e89d6d728a23cde0bcdac01e1",
"assets/assets/props/dorco/10_dorco_v1.png": "2026121a7deb064f0f9ddaba99eb751d",
"assets/assets/props/dorco/11_dorco_v1.png": "3037401918bdbbdc078f1d41715bdd6d",
"assets/assets/props/dorco/12_dorco_v1.png": "34ea8567927f5dce859dc09c4ac32249",
"assets/assets/props/dorco/13_dorco_v1.png": "2ccc92aa04587ab633a4f98026edb63d",
"assets/assets/props/dorco/14_dorco_v1.png": "820cd3837565d5c8f6990362afab875b",
"assets/assets/props/dorco/15_dorco_v1.png": "43b327afb7a48b7581f6e652fa43d641",
"assets/assets/props/dorco/16_dorco_v1.png": "4f3f343eab247de66b1cc88421ddbdd3",
"assets/assets/props/dorco/17_dorco_v1.png": "f4a50ca5d0fc265fb7c2d9735010d089",
"assets/assets/props/dorco/18_dorco_v1.png": "560052f0b636e29d03fd6856e5f00b1b",
"assets/assets/props/dorco/19_dorco_v1.png": "d39232a20e8698b31eafa011cfdbd04d",
"assets/assets/props/dorco/20_dorco_v1.png": "cd662bf811460ef935ce57cf3f15753a",
"assets/assets/props/dorco/21_dorco_v1.png": "eb7e3fdb4b2765124d9132aa73a8535f",
"assets/assets/props/dorco/22_dorco_v1.png": "5fce5476ee7eb9e4bfd557d3ecb31fc3",
"assets/assets/props/dorco/23_dorco_v1.png": "264618c919e96bc406606dfd063154b4",
"assets/assets/props/dorco/24_dorco_v1.png": "00ec1b9e4e7b29e786dcbd97c916dd61",
"assets/assets/props/dorco/25_dorco_v1.png": "506d32ad6b0bdf66a16a780054891715",
"assets/assets/props/dorco/26_dorco_v1.png": "8e836c63b354b59f8648582bae06f471",
"assets/assets/props/dorco/27_dorco_v1.png": "fc8440b481dded05140c27e4fd94141d",
"assets/assets/props/dorco/28_dorco_v1.png": "0641cf53dffa9a2e34a5e19617b157bb",
"assets/assets/props/eyewear/01_eyewear_v1.png": "aeb7f3069137cc1c7ea6086dda12c6a2",
"assets/assets/props/eyewear/02_eyewear_v1.png": "c059500cf21cb90d3700994f5eaac3a3",
"assets/assets/props/eyewear/03_eyewear_v1.png": "943fcb8ab12844d0eb2e1d96a176db67",
"assets/assets/props/eyewear/04_eyewear_v1.png": "ccd8fa844e8673c1bdb7b06f482411c1",
"assets/assets/props/eyewear/05_eyewear_v1.png": "20a935e7a36deb724991cdd430ea4398",
"assets/assets/props/eyewear/06_eyewear_v1.png": "5e5a317db3bc05177908afb9af53be87",
"assets/assets/props/eyewear/07_eyewear_v1.png": "e0f1857d6c9646d150f260d18ecd9557",
"assets/assets/props/eyewear/08_eyewear_v1.png": "d6f29369905e8d5de288ceda4c23ac39",
"assets/assets/props/eyewear/09_eyewear_v1.png": "ba1c6b165a59559447e9b302c31d0ea4",
"assets/assets/props/eyewear/10_eyewear_v1.png": "3d8ffef3f14c094e7a5d93caca981e59",
"assets/assets/props/eyewear/11_eyewear_v1.png": "1a6901f83c9d95006aeb0c7408e8f87b",
"assets/assets/props/eyewear/12_eyewear_v1.png": "bdc2b88ed05e4356b70f4ac497f1b86e",
"assets/assets/props/eyewear/13_eyewear_v1.png": "c465f4185d06692fa916d0780e1829e0",
"assets/assets/props/eyewear/14_eyewear_v1.png": "81ec587a91e6060cd75888f16fdeeec8",
"assets/assets/props/eyewear/15_eyewear_v1.png": "ebb4b6fc53e79a48d44c1e05d6fa4d69",
"assets/assets/props/eyewear/16_eyewear_v1.png": "9fb6d9358431bcf7c7b2b06008103342",
"assets/assets/props/food/01_food_v1.png": "ac4b8de5bbe76c3ebf33225a89f89b12",
"assets/assets/props/food/02_food_v1.png": "5bc97bb82a9ecb502e7cabcf403dfaba",
"assets/assets/props/food/03_food_v1.png": "a71f5042d92b8eb5a13d7a175d9ceac2",
"assets/assets/props/food/04_food_v1.png": "01cd7641c1dc27769b3418f226a25caa",
"assets/assets/props/food/05_food_v1.png": "14b1fc2000273d3f8027c3b51a6c26f9",
"assets/assets/props/food/06_food_v1.png": "f9a895fead9735eee3ec95e6890a72ea",
"assets/assets/props/food/07_food_v1.png": "e09bae81b79c048549526bcd63292b84",
"assets/assets/props/food/08_food_v1.png": "c78ecc26c7caabdf865184b1824994f5",
"assets/assets/props/food/09_food_v1.png": "25ab228fc4ac72e7e690b9964aac08fa",
"assets/assets/props/food/10_food_v1.png": "f922250f5d6be489a048c82c7e22887f",
"assets/assets/props/food/11_food_v1.png": "b22903e6c93de87c6e06bc21e562447d",
"assets/assets/props/food/12_food_v1.png": "1548486ca954e88b99a9957abc2c74fe",
"assets/assets/props/food/13_food_v1.png": "7179565d58b3a3209d23f3a9a4aa63f4",
"assets/assets/props/food/14_food_v1.png": "b4acb89201f26cca8c3a171f2c81f54f",
"assets/assets/props/food/15_food_v1.png": "94aa11070246e49a549ef431805e4023",
"assets/assets/props/food/16_food_v1.png": "6564d7486f158a0ed2865ddb0daa2667",
"assets/assets/props/food/17_food_v1.png": "d41be5fe373ff0dd5b16ab63bc375fe2",
"assets/assets/props/food/18_food_v1.png": "6007a73dc7dae1bf99dea4c25bce9c15",
"assets/assets/props/food/19_food_v1.png": "e18323b969ea2358fa257ffaedb114eb",
"assets/assets/props/food/20_food_v1.png": "1cfec8dc072cd080d9d355cc924bad9f",
"assets/assets/props/food/21_food_v1.png": "5378510a1be848d4c1e12609812e1c41",
"assets/assets/props/food/22_food_v1.png": "e4e48ef9edf5f8a1e2334db02d5af728",
"assets/assets/props/food/23_food_v1.png": "629b228c897f8a605d5145957373f568",
"assets/assets/props/food/24_food_v1.png": "ad2ab9ce17bf481ca5628f26822181d4",
"assets/assets/props/food/25_food_v1.png": "7866df8472f5d9d973138bda0cec6cfc",
"assets/assets/props/google/01_google_v1.png": "8de981fbd73e46d69cafbd3bc85268a2",
"assets/assets/props/google/02_google_v1.png": "b4d5bda13314ebbd91be4aad3e0e8348",
"assets/assets/props/google/03_google_V1.png": "836f58d2f457882d7ecac67fc74b8633",
"assets/assets/props/google/04_google_v1.png": "b647edcafa9c06311486e4535e7a31cf",
"assets/assets/props/google/05_google_v1.png": "b905ce7482d463dc1edeb66fbc46fe35",
"assets/assets/props/google/06_google_v1.png": "37a6ddb918785ae3ccc355e41f79fadc",
"assets/assets/props/google/07_google_v1.png": "d40e5cf6fc26037425af013ed906670e",
"assets/assets/props/google/08_google_v1.png": "5c70a0f20ab74e10edf23528697bc7a9",
"assets/assets/props/google/09_google_v1.png": "05836f1a96e891b22f81cd218acc2d33",
"assets/assets/props/google/10_google_v1.png": "c7aa2d0eb85be602f190d74c1f52214d",
"assets/assets/props/google/11_google_v1.png": "f7be45b590259783b99a8e29b3834895",
"assets/assets/props/google/12_google_v1.png": "c2bf5c603eec2f34242647d0ccdd4490",
"assets/assets/props/google/13_google_v1.png": "340edc93f0e072360e815480522fbd57",
"assets/assets/props/google/14_google_v1.png": "d91f3e997402a16787ffde242c5d0ff8",
"assets/assets/props/google/15_google_v1.png": "e3d51c47e9cb7aeb57fbb1f21e02d67b",
"assets/assets/props/google/16_google_v1.png": "69d6a88a7f34483fcaf6b39d0d1fe9bb",
"assets/assets/props/google/17_google_v1.png": "f64a2a1910a976c6d17fe585fb7ef2b8",
"assets/assets/props/google/18_google_v1.png": "60d2f53bdfe77a3a6ff94778685dd323",
"assets/assets/props/google/19_google_v1.png": "abe4c610ea66967504922c6e0193051d",
"assets/assets/props/google/20_google_v1.png": "b662d2b40ef45732510e348d53c955e8",
"assets/assets/props/google/21_google_v1.png": "35421c2cfbd11c14ce60c973cf02915c",
"assets/assets/props/google/22_google_v1.png": "203540a44bf90e257da56b7af603c5a8",
"assets/assets/props/google/23_google_v1.png": "0fcb8e774e46b5b55598b06989e43362",
"assets/assets/props/google/24_google_v1.png": "c9caa926bf3b640df5086c5491dc9f45",
"assets/assets/props/google/25_google_v1.png": "0ecbe5b5218431aa55c8b257f8790092",
"assets/assets/props/google/26_google_v1.png": "dc80e230a077c4a58d302e9a4d0b45ae",
"assets/assets/props/google/27_google_v1.png": "db6b0f275e6ab465ce37c1ea462eaa48",
"assets/assets/props/google/28_google_v1.png": "4e5e4a8843863b54a7a6e365b8845985",
"assets/assets/props/google/29_google_v1.png": "1dd7453a7dcdec1d968ed75ce39fac98",
"assets/assets/props/google/30_google_v1.png": "a1f51797ac60b413a2cb73c1f9520b32",
"assets/assets/props/google/31_google_v1.png": "696928988d33d47a050ccfe3b697c853",
"assets/assets/props/google/32_google_v1.png": "9c4af27561d45219e1bb3f5fc46864b3",
"assets/assets/props/google/33_google_v1.png": "e9c2f003f5a86d951b0c365ee5d20e8f",
"assets/assets/props/google/34_google_v1.png": "2079ff4a92be7eec157d9cc6d40c556c",
"assets/assets/props/google/35_google_v1.png": "ab6a63172e3869348c4874f62363b55e",
"assets/assets/props/hats/01_hats_v1.png": "6ec30f03be0be170173862ffe1d7fcec",
"assets/assets/props/hats/02_hats_v1.png": "6a143aea091f233b723fa158d612b33a",
"assets/assets/props/hats/03_hats_v1.png": "be109e518a11c83a29ff9aebddbab4af",
"assets/assets/props/hats/04_hats_v1.png": "2f75bd80ca497702124b0f75af74ff16",
"assets/assets/props/hats/05_hats_v1.png": "98cc69051bd2988ee89763d515659d1a",
"assets/assets/props/hats/06_hats_v1.png": "2b49c53755244085c738a3c8340af49a",
"assets/assets/props/hats/07_hats_v1.png": "82eb8ad04ea08419eba6ef92aadb1495",
"assets/assets/props/hats/08_hats_v1.png": "364e1cd7f017a7083132785b399236f8",
"assets/assets/props/hats/09_hats_v1.png": "d1214cb5816bd733a1fcef44c777404f",
"assets/assets/props/hats/10_hats_v1.png": "845932332017f0e2894738368306a85a",
"assets/assets/props/hats/11_hats_v1.png": "4188259680a5c94655ce38c70d7a8a9d",
"assets/assets/props/hats/12_hats_v1.png": "e3e2da1cd7b86f1bf02d3ebb2d5060a7",
"assets/assets/props/hats/13_hats_v1.png": "a8ab56c7443ad99b9a7f45fdc6dc555c",
"assets/assets/props/hats/14_hats_v1.png": "df93c77e2c091e62869c3e3230c5f77e",
"assets/assets/props/hats/15_hats_v1.png": "f9b19c9cf3980cebc602a95e7c163dc5",
"assets/assets/props/hats/16_hats_v1.png": "b0a0aa8ae836ef5be52afeadbb3bd138",
"assets/assets/props/hats/17_hats_v1.png": "cbb7a45fecb27a3787ecffd24a9e5ba0",
"assets/assets/props/hats/18_hats_v1.png": "cee544f47354d535ade57dc8ed183f76",
"assets/assets/props/hats/19_hats_v1.png": "df78c87c22acce55205e65f0c053b071",
"assets/assets/props/hats/20_hats_v1.png": "797303861d6c6e3d56085634b00f9136",
"assets/assets/props/hats/21_hats_v1.png": "e3e252eb2c18acf980a5ddbf5e93610a",
"assets/assets/props/hats/22_hats_v1.png": "34de77d3f4d2cdd801a3ce14a70e2e96",
"assets/assets/props/hats/23_hats_v1.png": "5b338763f17a7e14c1ce364d0b1e4ba0",
"assets/assets/props/hats/24_hats_v1.png": "b11e6a1650c69ca0bfaed8680ce8573a",
"assets/assets/props/hats/25_hats_v1.png": "4e246ef283931e6598dfc71ffa8680c4",
"assets/assets/props/hats/26_hats_v1.png": "3c882f7f64366609a7241684bbcb8f2a",
"assets/assets/props/hats/27_hats_v1.png": "6eb91d9a029360bd4398998bc1ff8d57",
"assets/assets/props/shapes/01_shapes_v1.png": "04d8a86eada42219bdafbf143ca44d8b",
"assets/assets/props/shapes/02_shapes_v1.png": "0d14802bf08c354f373c3770a4d475fe",
"assets/assets/props/shapes/03_shapes_v1.png": "e8aa971b4ab033b1c1cbfba6fe9f8676",
"assets/assets/props/shapes/04_shapes_v1.png": "2495b65b38b84779d1c6efe072b4a424",
"assets/assets/props/shapes/05_shapes_v1.png": "afd3f1140728c567091c15d43531544f",
"assets/assets/props/shapes/06_shapes_v1.png": "87dc57707264564e371bcd0138d3d326",
"assets/assets/props/shapes/07_shapes_v1.png": "2538282caebfb002725f2058afa9bada",
"assets/assets/props/shapes/08_shapes_v1.png": "ae20eb5d71dd94fd459eb804aac86ca3",
"assets/assets/props/shapes/09_shapes_v1.png": "c8d641f50d2d5800230a13ff89148a70",
"assets/assets/props/shapes/10_shapes_v1.png": "aa92b5dfeeee205e39a3cffc32a96c67",
"assets/assets/props/shapes/11_shapes_v1.png": "b79f8c2dbfb56e6669ac47fac25fe9f2",
"assets/assets/props/shapes/12_shapes_v1.png": "fb7bbfcc2a649c586e5ade6c7c998cda",
"assets/assets/props/shapes/13_shapes_v1.png": "7d99f0acc8f86f1b2d5ae4c9db3653db",
"assets/assets/props/shapes/14_shapes_v1.png": "c762c1e588b39b19e523748cb2d55962",
"assets/assets/props/shapes/15_shapes_v1.png": "ff285e711a0ba4379d62702bf2d2e471",
"assets/assets/props/shapes/16_shapes_v1.png": "8724ca8bd5e00bb9cbf305e1290c8583",
"assets/assets/props/shapes/17_shapes_v1.png": "1bd57d3d20885591120c7d5cb6927f6d",
"assets/assets/props/shapes/18_shapes_v1.png": "897117c59c141339ab75c593422fa00f",
"assets/assets/props/shapes/19_shapes_v1.png": "60fa08eca69dce8821e171dfee872e71",
"assets/assets/props/shapes/20_shapes_v1.png": "6146a360c76daaac9b1d7a8d4eee1ef8",
"assets/assets/props/shapes/21_shapes_v1.png": "2d8628f405ca209e3ad220859d79b50e",
"assets/assets/props/shapes/22_shapes_v1.png": "afbd1d12f958dd9bdfb3e734845d90b6",
"assets/assets/props/shapes/23_shapes_v1.png": "788bc961907e558ab6f33eb6c3a217ff",
"assets/assets/props/shapes/24_shapes_v1.png": "679726a5f43233bc5befda9e316dec0d",
"assets/assets/props/shapes/25_shapes_v1.png": "03a8c63656738d271371c6676fd4e4db",
"assets/FontManifest.json": "b8c599a207671f049b0330150231b3ff",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "46973487d2881a9ec241bd46133a0268",
"assets/packages/photobooth_ui/assets/fonts/GoogleSans-Bold.ttf": "c0370e8a74992bab73461f8348e3b369",
"assets/packages/photobooth_ui/assets/fonts/GoogleSans-BoldItalic.ttf": "aebc8fe5e393970fa3d468524e64b670",
"assets/packages/photobooth_ui/assets/fonts/GoogleSans-Italic.ttf": "b08c7421b2d5350ea3003c8f38932601",
"assets/packages/photobooth_ui/assets/fonts/GoogleSans-Medium.ttf": "6e8db86fe091d16a432715917e040f29",
"assets/packages/photobooth_ui/assets/fonts/GoogleSans-MediumItalic.ttf": "fb674b7b0ac8b18da163673c10081610",
"assets/packages/photobooth_ui/assets/fonts/GoogleSans-Regular.ttf": "51134713ade7b1f137e06ce395d39d40",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon-v1.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "7f3ac793adb23fd689a19615c7257b84",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "903be15363cfb110181416e35194350f",
"icons/Icon-192-v1.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "fd0a87274f2c9f603a6bbada51952e1d",
"icons/Icon-512-v1.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512.png": "ec2710d97577ab994bfb31a5e26d25d8",
"index.html": "b803b88c1b41f3a73e5645dc1c7ddbc4",
"/": "b803b88c1b41f3a73e5645dc1c7ddbc4",
"main.dart.js": "52370e4a78c838fad6edaebfe14dce93",
"version.json": "45b2add39f4e14ceef3e908c3e04a7f0",
"__/firebase/8.4.1/firebase-app.js": "919709b4639c4e4a3f1e98de6fdee033",
"__/firebase/8.4.1/firebase-auth.js": "d3ea03773990125ee237ef37e0c29043",
"__/firebase/8.4.1/firebase-firestore.js": "2dbb231dd8b0b989de18a14dbc0c1204",
"__/firebase/8.4.1/firebase-performance.js": "7ed1e155e9d6993063968f562ef866db",
"__/firebase/8.4.1/firebase-storage.js": "a571da14943032d36d3145d980ded5e1",
"__/firebase/init.js": "099041df78e64049e6eedc3e935cddf3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
