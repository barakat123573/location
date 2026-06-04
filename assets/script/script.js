 const MENU = { "categories": [{ "name": "Desserts - Tarts", "items": [{ "id": 1, "name_ar": "تشيز كيك ساده", "name_en": "CHEESE CAKE", "price": "65" }, { "id": 2, "name_ar": "تشيز كيك بصوص فراوله اولتوت او الشيكولاته", "name_en": "CHEESE CAKE", "price": "75" }, { "id": 3, "name_ar": "تشيز كيك كيت كات او جلاكسي او تويكس", "name_en": "CHEESE CAKE", "price": "85" }, { "id": 4, "name_ar": "شوكلت كيك", "name_en": "CHOCOLATE CAKE", "price": "65" }, { "id": 5, "name_ar": "شوكلت فادج", "name_en": "CHOCOLATE FUDGE", "price": "65" }, { "id": 6, "name_ar": "شوكلت فلوتس", "name_en": "KINDER CHOCOLATE", "price": "80" }, { "id": 7, "name_ar": "شوكلت توكس", "name_en": "CHOCOLATE FLOATS", "price": "80" }, { "id": 8, "name_ar": "شوكلت كيت كات", "name_en": "CHOCOLATE TWIX", "price": "80" }, { "id": 9, "name_ar": "لافا بصوص الشيكولاته", "name_en": "CHOCOLATE KIT KAT", "price": "100" }, { "id": 10, "name_ar": "لافا نوتيلا", "name_en": "LAVE CHOCOLATE SAUCE", "price": "100" }, { "id": 11, "name_ar": "ريد فالفيد", "name_en": "RED VELVET", "price": "65" }, { "id": 12, "name_ar": "مولتن", "name_en": "MOLTEN", "price": "120" }, { "id": 13, "name_ar": "براونيز", "name_en": "BROWNIES", "price": "75" }, { "id": 14, "name_ar": "سينابون", "name_en": "CINNAMON", "price": "60" }, { "id": 15, "name_ar": "جيلي", "name_en": "JELLY", "price": "40" }, { "id": 16, "name_ar": "جيلي فواكه", "name_en": "FRUIT JELLY", "price": "55" }, { "id": 17, "name_ar": "كريم كراميل", "name_en": "CRÈME CARAMEL", "price": "45" }, { "id": 18, "name_ar": "كريم كراميل فواكه", "name_en": "FRUIT CRÈME CARAMEL", "price": "65" }, { "id": 19, "name_ar": "فروت سلاد", "name_en": "FRUIT SALAD", "price": "70" }, { "id": 20, "name_ar": "بانانا بوت", "name_en": "BANANA BOAT", "price": "80" }, { "id": 21, "name_ar": "توتي فروتي", "name_en": "TOTTI FRUTTI", "price": "80" }, { "id": 22, "name_ar": "فالكانو لوتس", "name_en": "FALCANO LOTUS", "price": "80" }, { "id": 23, "name_ar": "شوكلت مالتيزرز", "name_en": "CHOCOLATE MALTESERS", "price": "80" }, { "id": 24, "name_ar": "لوكيشن ايس", "name_en": "LOCATION ICE", "price": "100" }, { "id": 25, "name_ar": "ترامسيو", "name_en": "TIRAMISU", "price": "70" }] }, { "name": "Ice Cream Sunday", "items": [{ "id": 26, "name_ar": "فانيليا", "name_en": "VANILLA", "price": "60" }, { "id": 27, "name_ar": "مانجو", "name_en": "MANGO", "price": "65" }, { "id": 28, "name_ar": "فراوله", "name_en": "STRAWBERRIES", "price": "65" }, { "id": 29, "name_ar": "موكا", "name_en": "MOKA", "price": "60" }, { "id": 30, "name_ar": "كراميل", "name_en": "CARAMEL", "price": "60" }, { "id": 31, "name_ar": "شوكلت", "name_en": "CHOCOLATE", "price": "60" }, { "id": 32, "name_ar": "كيت كات", "name_en": "KIT KAT", "price": "75" }, { "id": 33, "name_ar": "مالتيزرز", "name_en": "MALTESERS", "price": "75" }, { "id": 34, "name_ar": "جلاكسي", "name_en": "GALAXY", "price": "80" }, { "id": 35, "name_ar": "بوريو", "name_en": "OREO", "price": "65" }, { "id": 36, "name_ar": "ناتس مكسرات", "name_en": "NUTS", "price": "85" }, { "id": 37, "name_ar": "ايس كريم كوكيز", "name_en": "ICE CREAM COOKIES", "price": "85" }] }, { "name": "Waffle", "items": [{ "id": 38, "name_ar": "وافل نوتيلا", "name_en": "WAFFLE NUTELLA", "price": "125" }, { "id": 39, "name_ar": "وافل مكسرات", "name_en": "WAFFLE NUTS", "price": "160" }, { "id": 40, "name_ar": "وافل فواكه", "name_en": "FRUIT WAFFLE", "price": "135" }, { "id": 41, "name_ar": "وافل ايس كريم", "name_en": "WAFFLE ICE CREAM", "price": "140" }, { "id": 42, "name_ar": "وافل لوكيشن", "name_en": "WAFFLE LOCATION", "price": "170" }, { "id": 43, "name_ar": "وافل كواترو", "name_en": "QUATTRO WAFFLE", "price": "170" }] }, { "name": "Hot Drinks - Coffee", "items": [{ "id": 44, "name_ar": "اسبرسو سنجل", "name_en": "ESPRESSO SINGLE", "price": "40" }, { "id": 45, "name_ar": "اسبرسو دبل", "name_en": "DOUBLE ESPRESSO", "price": "55" }, { "id": 46, "name_ar": "اسبرسو مكياتو", "name_en": "ESPRESSO MACCHIATO", "price": "60" }, { "id": 47, "name_ar": "اسبرسو نوتيلا", "name_en": "CHOCOLATE ESPRESSO", "price": "70" }, { "id": 48, "name_ar": "قهوه نكهات", "name_en": "COFFEE FLAVORS", "price": "55 / 45" }, { "id": 49, "name_ar": "قهوه تركي", "name_en": "TURKISH COFFEE", "price": "40 / 30" }, { "id": 50, "name_ar": "كابتشينو", "name_en": "CAPPUCCINO", "price": "65" }, { "id": 51, "name_ar": "موكا", "name_en": "MOCHA", "price": "65" }, { "id": 52, "name_ar": "موكا كراميل", "name_en": "MOCHA CARAMEL", "price": "70" }, { "id": 53, "name_ar": "نسكافيه", "name_en": "NESCAFE", "price": "55" }, { "id": 54, "name_ar": "قهوه فرنساوي", "name_en": "FRENCH COFFEE", "price": "60 / 45" }, { "id": 55, "name_ar": "كافيه لاتيه", "name_en": "CAFE LATTE", "price": "65" }] }, { "name": "Hot Drinks - Herbals", "items": [{ "id": 56, "name_ar": "شاي", "name_en": "TEA", "price": "15" }, { "id": 57, "name_ar": "اعشاب", "name_en": "HERBS", "price": "20" }, { "id": 58, "name_ar": "كوندريلا", "name_en": "KONDRELLA", "price": "40" }, { "id": 59, "name_ar": "هوت سيدار", "name_en": "HOT CEDAR", "price": "45" }, { "id": 60, "name_ar": "سحلب", "name_en": "SAHLAB", "price": "35" }, { "id": 61, "name_ar": "سحلب مكسرات", "name_en": "SAHLAB NUTS", "price": "70" }, { "id": 62, "name_ar": "سحلب فواكه", "name_en": "SAHLAB FRUITS", "price": "50" }, { "id": 63, "name_ar": "سحلب لوكيشن", "name_en": "SAHLAB LOCATION", "price": "55" }] }, { "name": "Hot Drinks - Chocolate Lovers", "items": [{ "id": 64, "name_ar": "هوت شوكليت", "name_en": "HOT CHOCOLATE", "price": "70" }, { "id": 65, "name_ar": "فاملي شوكلت", "name_en": "FAMILY CHOCOLATE", "price": "75" }, { "id": 66, "name_ar": "هوت جلاكسي", "name_en": "HOT GALAXY", "price": "90" }, { "id": 67, "name_ar": "هوت بوريو", "name_en": "HOT OREO", "price": "75" }, { "id": 68, "name_ar": "هوت كراميل", "name_en": "HOT CARAMEL", "price": "75" }] }, { "name": "Cold Drinks - Soft Drinks", "items": [{ "id": 69, "name_ar": "كوكا كولا - فانتا - سبرايت", "name_en": "COCA COLA / FANTA / SPRITE", "price": "25" }, { "id": 70, "name_ar": "شويبس جولد", "name_en": "SCHWEPPES GOLD", "price": "25" }, { "id": 71, "name_ar": "سفن اب ليمون نعناع", "name_en": "7UP LEMON MINT", "price": "70" }, { "id": 72, "name_ar": "بيريل", "name_en": "BRILL", "price": "30" }, { "id": 73, "name_ar": "شيري كولا", "name_en": "CHERRY COLA", "price": "30" }, { "id": 74, "name_ar": "فيتا بلو", "name_en": "VITA BLUE", "price": "60" }, { "id": 75, "name_ar": "موهيتو", "name_en": "MOJITO", "price": "70" }, { "id": 76, "name_ar": "صن شاين", "name_en": "SUNSHINE", "price": "70" }, { "id": 77, "name_ar": "صودا منت", "name_en": "SODA MINT", "price": "70" }, { "id": 78, "name_ar": "ميكس فيتا بلو صودا", "name_en": "MIX VITA BLUE SODA", "price": "70" }, { "id": 79, "name_ar": "ميكس توت صودا", "name_en": "MIX BERRY SODA", "price": "70" }, { "id": 80, "name_ar": "ميكس كيوي صودا", "name_en": "MIX KIWI SODA", "price": "70" }, { "id": 81, "name_ar": "ميكس بطيخ صودا", "name_en": "MIX WATERMELON SODA", "price": "70" }, { "id": 82, "name_ar": "ليمون بلوبيري", "name_en": "BLUEBERRY LEMON", "price": "70" }, { "id": 83, "name_ar": "مياه معدنيه صغيره", "name_en": "MINERAL WATER (SMALL)", "price": "10" }] }, { "name": "Cold Drinks - Iced Coffee & Frappe", "items": [{ "id": 84, "name_ar": "ايس شوكلت", "name_en": "CHOCOLATE ICE", "price": "60" }, { "id": 85, "name_ar": "ايس لاتيه", "name_en": "ICE LATTE", "price": "60" }, { "id": 86, "name_ar": "ايس موكا", "name_en": "ICE MOCHA", "price": "60" }, { "id": 87, "name_ar": "ايس كراميل", "name_en": "ICE CARAMEL", "price": "60" }, { "id": 88, "name_ar": "فرابتشينو كراميل", "name_en": "FRAPPUCCINO CARAMEL", "price": "70" }, { "id": 89, "name_ar": "فرابتشينو بندق", "name_en": "FRAPPUCCINO HAZELNUT", "price": "75" }, { "id": 90, "name_ar": "فرابتشينو شوكلت", "name_en": "FRAPPUCCINO CHOCOLATE", "price": "70" }, { "id": 91, "name_ar": "فرابتشينو فانيليا", "name_en": "FRAPPUCCINO VANILLA", "price": "70" }, { "id": 92, "name_ar": "فرابتشينو فراوله", "name_en": "FRAPPUCCINO STRAWBERRY", "price": "70" }] }, { "name": "Cold Drinks - Fresh Juice & Smoothies", "items": [{ "id": 93, "name_ar": "مانجو مع كيوي", "name_en": "MANGO AND KIWI", "price": "75" }, { "id": 94, "name_ar": "مانجو", "name_en": "MANGO", "price": "55" }, { "id": 95, "name_ar": "فراوله", "name_en": "STRAWBERRY", "price": "55" }, { "id": 96, "name_ar": "برتقال", "name_en": "ORANGE", "price": "50" }, { "id": 97, "name_ar": "جوافه", "name_en": "GUAVA", "price": "50" }, { "id": 98, "name_ar": "موز", "name_en": "BANANA", "price": "50" }, { "id": 99, "name_ar": "اناناس", "name_en": "PINEAPPLE", "price": "55" }, { "id": 100, "name_ar": "خوخ", "name_en": "PEACH", "price": "50" }, { "id": 101, "name_ar": "رمان", "name_en": "POMEGRANATE", "price": "60" }, { "id": 102, "name_ar": "كلاسيك ليمون", "name_en": "CLASSIC LEMON", "price": "45" }, { "id": 103, "name_ar": "ليمون نعناع", "name_en": "LEMON MINT", "price": "55" }, { "id": 104, "name_ar": "كيوي", "name_en": "KIWI", "price": "60" }, { "id": 105, "name_ar": "تفاح", "name_en": "APPLE", "price": "60" }, { "id": 106, "name_ar": "افوكادو", "name_en": "AVOCADO", "price": "70" }, { "id": 107, "name_ar": "بلح", "name_en": "DATES", "price": "60" }, { "id": 108, "name_ar": "كانتلوب", "name_en": "CANTALOUPE", "price": "60" }, { "id": 109, "name_ar": "بطيخ", "name_en": "WATERMELON", "price": "50" }] }, { "name": "Cold Drinks - Special Smoothies", "items": [{ "id": 110, "name_ar": "لوكيشن", "name_en": "LOCATION", "price": "100" }, { "id": 111, "name_ar": "فلوريدا", "name_en": "FLORIDA", "price": "100" }, { "id": 112, "name_ar": "بانانا كراميل", "name_en": "BANANA CARAMEL", "price": "110" }, { "id": 113, "name_ar": "الاسطوره", "name_en": "THE LEGEND", "price": "110" }, { "id": 114, "name_ar": "الطاقه القصوي", "name_en": "MAXIMUM ENERGY", "price": "110" }, { "id": 115, "name_ar": "سيموني", "name_en": "SIMONE", "price": "100" }, { "id": 116, "name_ar": "العنتيل", "name_en": "EL3ANTEEL", "price": "100" }, { "id": 117, "name_ar": "بينك روز", "name_en": "PINK ROSE", "price": "95" }, { "id": 118, "name_ar": "فلنتينو كوكتيل", "name_en": "VALENTINO COCKTAIL", "price": "100" }, { "id": 119, "name_ar": "رضعه الفيل", "name_en": "ELEPHANT MEAL", "price": "110" }, { "id": 120, "name_ar": "رضعه الاسد", "name_en": "LIONS MEAL", "price": "110" }] }, { "name": "Cold Drinks - Milk Shake", "items": [{ "id": 121, "name_ar": "ميلك شيك فانيليا", "name_en": "MILK SHAKE VANILLA", "price": "80" }, { "id": 122, "name_ar": "ميلك شيك شوكلت", "name_en": "MILK SHAKE CHOCOLATE", "price": "80" }, { "id": 123, "name_ar": "ميلك شيك كراميل", "name_en": "MILK SHAKE CARAMEL", "price": "80" }, { "id": 124, "name_ar": "ميلك شيك فراوله", "name_en": "MILK SHAKE STRAWBERRY", "price": "80" }, { "id": 125, "name_ar": "ميلك شيك مانجو", "name_en": "MILK SHAKE MANGO", "price": "80" }, { "id": 126, "name_ar": "ميلك شيك توت", "name_en": "MILK SHAKE BLUEBERRY", "price": "85" }, { "id": 127, "name_ar": "ميلك شيك افوكادو", "name_en": "MILK SHAKE AVOCADO", "price": "105" }, { "id": 128, "name_ar": "ميلك شيك موز", "name_en": "MILK SHAKE BANANA", "price": "80" }, { "id": 129, "name_ar": "ميلك شيك جلاكسي", "name_en": "MILK SHAKE GALAXY", "price": "110" }, { "id": 130, "name_ar": "ميلك شيك كيت كات", "name_en": "MILK SHAKE KIT KAT", "price": "110" }, { "id": 131, "name_ar": "ميلك شيك كاجو", "name_en": "MILK SHAKE CASHEW", "price": "120" }, { "id": 132, "name_ar": "ميلك شيك تويكس", "name_en": "MILK SHAKE TWIX", "price": "115" }, { "id": 133, "name_ar": "ميلك شيك بوريو", "name_en": "MILK SHAKE OREO", "price": "90" }, { "id": 134, "name_ar": "ميلك شيك مكسرات", "name_en": "MILK SHAKE NUTS", "price": "120" }] }, { "name": "Cold Drinks - Yogurt", "items": [{ "id": 135, "name_ar": "زبادي عصير", "name_en": "YOGURT JUICE", "price": "50" }, { "id": 136, "name_ar": "زبادي قطع", "name_en": "YOGURT CUT", "price": "60" }, { "id": 137, "name_ar": "زبادي عسل", "name_en": "HONEY YOGURT", "price": "35" }, { "id": 138, "name_ar": "زبادي ساده", "name_en": "PLAIN YOGURT", "price": "30" }] }, { "name": "Dishes - Meals", "items": [{ "id": 139, "name_ar": "وجبه كفته شرقي", "name_en": "EAST KOFTA MEAL", "price": "270" }, { "id": 140, "name_ar": "وجبه مكس جريل", "name_en": "MIX GRILL MEAL", "price": "300" }, { "id": 141, "name_ar": "وجبه كرانشي", "name_en": "CRUNCHY MEAL", "price": "270" }, { "id": 142, "name_ar": "وجبه مشوي صدور", "name_en": "GRILLED CHICKEN MEAL", "price": "265" }, { "id": 143, "name_ar": "وجبه تشيكن بانيه", "name_en": "FRIED CHICKEN MEAL", "price": "275" }, { "id": 144, "name_ar": "وجبه شيش طاووق", "name_en": "SHISH TAOUK MEAL", "price": "230" }, { "id": 145, "name_ar": "وجبه كوردون بلو", "name_en": "CORDON BLEU MEAL", "price": "240" }, { "id": 146, "name_ar": "وجبه فاهيتا لحمه", "name_en": "BEEF FAJITA MEAL", "price": "260" }, { "id": 147, "name_ar": "وجبه فاهيتا فراخ", "name_en": "CHICKEN FAJITA MEAL", "price": "220" }, { "id": 148, "name_ar": "وجبه جمبري بانيه", "name_en": "FRIED SHRIMP MEAL", "price": "280" }, { "id": 149, "name_ar": "وجبه سي فود", "name_en": "SEA FOOD MEAL", "price": "300" }, { "id": 150, "name_ar": "وجبه فته شاورما فراخ سوري", "name_en": "CHICKEN SHAWARMA SYRIAN", "price": "200" }, { "id": 151, "name_ar": "وجبه فته شاورما لحمه سوري", "name_en": "BEEF SHAWARMA SYRIAN", "price": "250" }, { "id": 152, "name_ar": "تشيكن كاري", "name_en": "CHICKEN CURRY", "price": "250" }, { "id": 153, "name_ar": "وجبه تشيكن كاري", "name_en": "CHICKEN CURRY MEAL", "price": "250" }] }, { "name": "Dishes - Kids Meals", "items": [{ "id": 154, "name_ar": "تشيكن ناجتس", "name_en": "CHICKEN NUGGETS", "price": "110" }, { "id": 155, "name_ar": "تشيكن برجر", "name_en": "CHICKEN BURGER", "price": "100" }, { "id": 156, "name_ar": "بيف برجر", "name_en": "BEEF BURGER", "price": "100" }] }, { "name": "Dishes - Salads & Side Dishes", "items": [{ "id": 157, "name_ar": "تشيكن سيزر سلاد", "name_en": "CHICKEN CAESAR SALAD", "price": "75" }, { "id": 158, "name_ar": "تونا سلاد", "name_en": "TUNA SALAD", "price": "80" }, { "id": 159, "name_ar": "جرين سلاد", "name_en": "GREEN SALAD", "price": "35" }, { "id": 160, "name_ar": "كلو سلو", "name_en": "COLESLAW", "price": "40" }, { "id": 161, "name_ar": "تكساس بوتيتو", "name_en": "TEXAS POTATO", "price": "85" }, { "id": 162, "name_ar": "بطاطس فارم فريتس", "name_en": "FARM FRITES", "price": "40" }, { "id": 163, "name_ar": "بطاطس كاتشب او مايونيز", "name_en": "POTATOES", "price": "50" }, { "id": 164, "name_ar": "بطاطس فريسكس", "name_en": "FRISKES", "price": "50" }, { "id": 165, "name_ar": "ثوميه وخبز محمص", "name_en": "GARLIC DIP & TOAST", "price": "30" }, { "id": 166, "name_ar": "قطعه خبز كبيره", "name_en": "BREAD LARGE", "price": "8" }, { "id": 167, "name_ar": "قطعه خبز وسط", "name_en": "BREAD MEDIUM", "price": "5" }, { "id": 168, "name_ar": "مخلل", "name_en": "PICKLES", "price": "6" }] }, { "name": "Dishes - Rizo", "items": [{ "id": 169, "name_ar": "تشيكن ريزو فراح", "name_en": "CHICKEN RIZO", "price": "125" }, { "id": 170, "name_ar": "تشيكن ريزو ستريس", "name_en": "CHICKEN RIZO STRIPS", "price": "145" }, { "id": 171, "name_ar": "بيف ريزو", "name_en": "BEEF RIZO", "price": "160" }, { "id": 172, "name_ar": "ريزو جمبري", "name_en": "SHRIMP RIZO", "price": "175" }, { "id": 173, "name_ar": "لوكيشن ريزو", "name_en": "LOCATION RIZO", "price": "180" }] }, { "name": "Pizza", "items": [{ "id": 174, "name_ar": "تشيزي بيتزا", "name_en": "CHEESY PIZZA", "price": "L: 180 / M: 150" }, { "id": 175, "name_ar": "مارجريتا", "name_en": "MARGHERITA", "price": "L: 165 / M: 145" }, { "id": 176, "name_ar": "جاميكا", "name_en": "JAMAICA", "price": "L: 190 / M: 175" }, { "id": 177, "name_ar": "تشيكن باربيكيو", "name_en": "BBQ CHICKEN PIZZA", "price": "L: 180 / M: 155" }, { "id": 178, "name_ar": "بيتزا بيروني", "name_en": "PIZZA PEPPERONI", "price": "L: 210 / M: 180" }, { "id": 179, "name_ar": "هوت دوج", "name_en": "HOT DOG PIZZA", "price": "L: 160 / M: 140" }, { "id": 180, "name_ar": "ماشروم", "name_en": "MUSHROOM PIZZA", "price": "L: 160 / M: 145" }, { "id": 181, "name_ar": "مفروم", "name_en": "GROUND BEEF PIZZA", "price": "L: 185 / M: 165" }, { "id": 182, "name_ar": "سجق شرقي", "name_en": "SAUSAGE PIZZA", "price": "L: 185 / M: 165" }, { "id": 183, "name_ar": "مشوي صدور", "name_en": "GRILLED CHICKEN PIZZA", "price": "L: 175 / M: 150" }, { "id": 184, "name_ar": "هاواي", "name_en": "HAWAII PIZZA", "price": "L: 170 / M: 145" }, { "id": 185, "name_ar": "سوبر سموكد", "name_en": "SUPER SMOKED PIZZA", "price": "L: 175 / M: 140" }, { "id": 186, "name_ar": "تشكن ركفورد", "name_en": "CHICKEN ROQUEFORT", "price": "L: 175 / M: 145" }, { "id": 187, "name_ar": "تشكن سوبريم", "name_en": "CHICKEN SUPREME PIZZA", "price": "L: 195 / M: 170" }, { "id": 188, "name_ar": "سوبر سوبريم", "name_en": "SUPER SUPREME PIZZA", "price": "L: 205 / M: 185" }, { "id": 189, "name_ar": "سي فود", "name_en": "SEA FOOD PIZZA", "price": "L: 220 / M: 200" }, { "id": 190, "name_ar": "جمبري", "name_en": "SHRIMP PIZZA", "price": "L: 210 / M: 180" }, { "id": 191, "name_ar": "تونة", "name_en": "TUNA PIZZA", "price": "L: 180 / M: 150" }, { "id": 192, "name_ar": "ميلانو", "name_en": "MILANO PIZZA", "price": "L: 180 / M: 150" }, { "id": 193, "name_ar": "بيتزا بانية", "name_en": "BANH PIZZA", "price": "L: 185 / M: 160" }, { "id": 194, "name_ar": "كواترو", "name_en": "QUATTRO PIZZA", "price": "230" }, { "id": 195, "name_ar": "لوكيشن", "name_en": "LOCATION PIZZA", "price": "L: 215 / M: 195" }, { "id": 196, "name_ar": "بيتزا شاورما فراخ", "name_en": "CHICKEN SHAWARMA PIZZA", "price": "L: 160 / M: 140" }, { "id": 197, "name_ar": "بيتزا بسطرمه", "name_en": "PASTRAMI PIZZA", "price": "180" }] }, { "name": "Pasta", "items": [{ "id": 198, "name_ar": "تشكين فيتشيني", "name_en": "CHICKEN FETTUCCINE", "price": "190" }, { "id": 199, "name_ar": "بنه ارابياتا", "name_en": "PENNE ARRABIATA", "price": "70" }, { "id": 200, "name_ar": "جريلد تشيكن تشيز", "name_en": "GRILLED CHICKEN CHEESE PASTA", "price": "200" }, { "id": 201, "name_ar": "باستا جمبري", "name_en": "PASTA SHRIMP", "price": "230" }, { "id": 202, "name_ar": "تشيكن الفريدو", "name_en": "CHICKEN ALFREDO", "price": "170" }, { "id": 203, "name_ar": "مكرونه نجرسكو", "name_en": "MACARONI NEGRESCO", "price": "180" }, { "id": 204, "name_ar": "مكرونه نجرسكو باجمبري", "name_en": "MACARONI NEGRESCO SHRIMP", "price": "240" }, { "id": 205, "name_ar": "مكرونه كوردون بلو", "name_en": "MACARONI CORDON BLEU", "price": "190" }, { "id": 206, "name_ar": "مكرونه نجرسكو لحم مفروم", "name_en": "NEGRESCO MINCED MEAT PASTA", "price": "180" }] }, { "name": "Crepe", "items": [{ "id": 207, "name_ar": "رومي", "name_en": "ROMY CREPE", "price": "130" }, { "id": 208, "name_ar": "موتزريلا", "name_en": "MOZZARELLA CREPE", "price": "85" }, { "id": 209, "name_ar": "مشكل جبن", "name_en": "MIX CHEESE CREPE", "price": "150" }, { "id": 210, "name_ar": "كريب بطاطس", "name_en": "POTATO CREPE", "price": "55" }, { "id": 211, "name_ar": "هوت دوج", "name_en": "HOT DOG CREPE", "price": "135" }, { "id": 212, "name_ar": "مايتي زنجر", "name_en": "MIGHTY ZINGER CREPE", "price": "185" }, { "id": 213, "name_ar": "برجر", "name_en": "BURGER CREPE", "price": "100" }, { "id": 214, "name_ar": "كفته", "name_en": "KOFTA CREPE", "price": "155" }, { "id": 215, "name_ar": "مشكل لحوم", "name_en": "MIX MEAT CREPE", "price": "190" }, { "id": 216, "name_ar": "مشكل فراخ", "name_en": "CHICKEN MIX CREPE", "price": "170" }, { "id": 217, "name_ar": "جمبري مشوي", "name_en": "GRILLED SHRIMP CREPE", "price": "170" }, { "id": 218, "name_ar": "جمبري بانيه", "name_en": "FRIED SHRIMP CREPE", "price": "170" }, { "id": 219, "name_ar": "سي فود", "name_en": "SEA FOOD CREPE", "price": "185" }, { "id": 220, "name_ar": "دجاج بانيه", "name_en": "CHICKEN PANE CREPE", "price": "150" }, { "id": 221, "name_ar": "مشوي صدور", "name_en": "GRILLED CHICKEN CREPE", "price": "150" }, { "id": 222, "name_ar": "شيش طاووق", "name_en": "SHISH TAOUK CREPE", "price": "105" }, { "id": 223, "name_ar": "فاهيتا فراخ", "name_en": "CHICKEN FAJITA CREPE", "price": "120" }, { "id": 224, "name_ar": "فاهيتا لحمه", "name_en": "BEEF FAJITA CREPE", "price": "180" }, { "id": 225, "name_ar": "سوبر كرانشي", "name_en": "SUPER CRUNCHY CREPE", "price": "155" }, { "id": 226, "name_ar": "زينجر سوبريم", "name_en": "ZINGER SUPREME CREPE", "price": "170" }, { "id": 227, "name_ar": "كوردون بلو", "name_en": "CORDON BLEU CREPE", "price": "140" }, { "id": 228, "name_ar": "شاورما دجاج", "name_en": "CHICKEN SHAWARMA CREPE", "price": "110" }, { "id": 229, "name_ar": "شاورما لحمه", "name_en": "BEEF SHAWARMA CREPE", "price": "180" }, { "id": 230, "name_ar": "لوكيشن", "name_en": "LOCATION CREPE", "price": "200" }, { "id": 231, "name_ar": "زينجر بوتيتو", "name_en": "ZINGER POTATO CREPE", "price": "190" }, { "id": 232, "name_ar": "شيكولاته نوتيلا", "name_en": "NUTELLA CHOCOLATE CREPE", "price": "130" }] }, { "name": "Sandwich - Chicken", "items": [{ "id": 233, "name_ar": "سويت تشيلي كرانشي", "name_en": "CRUNCHY SWEET CHILI", "price": "Roll: 150 / L: 165 / M: 125" }, { "id": 234, "name_ar": "مايتي زينجر", "name_en": "MIGHTY ZINGER", "price": "Roll: 150 / L: 180 / M: 130" }, { "id": 235, "name_ar": "زينجر سوبريم", "name_en": "ZINGER SUPREME", "price": "L: 175 / M: 130" }, { "id": 236, "name_ar": "تشيكن برجر", "name_en": "CHICKEN BURGER", "price": "L: 150" }, { "id": 237, "name_ar": "تشيكن بانيه", "name_en": "CHICKEN PANE", "price": "Roll: 150 / L: 150 / M: 105" }, { "id": 238, "name_ar": "كوردون بلو", "name_en": "CORDON BLEU", "price": "Roll: 150 / L: 150 / M: 110" }, { "id": 239, "name_ar": "تشيكن فاهيتا", "name_en": "CHICKEN FAJITA", "price": "Roll: 125 / L: 120 / M: 95" }, { "id": 240, "name_ar": "مشوي صدور", "name_en": "GRILLED CHICKEN BREASTS", "price": "Roll: 140 / L: 150 / M: 110" }, { "id": 241, "name_ar": "شيش طاووق", "name_en": "SHISH TAOUK", "price": "Roll: 140 / L: 140 / M: 100" }, { "id": 242, "name_ar": "شاورما الدجاج", "name_en": "CHICKEN SHAWARMA", "price": "Roll: 105 / L: 110 / M: 90" }, { "id": 243, "name_ar": "مشكل دجاج لوكيشن", "name_en": "MIX CHICKEN LOCATION", "price": "Roll: 175 / L: 175" }, { "id": 244, "name_ar": "تشيز بوتيتو", "name_en": "CHEESE POTATO", "price": "Roll: 60 / L: 60" }] }, { "name": "Sandwich - Beef", "items": [{ "id": 245, "name_ar": "ستيك برجر لوكيشن", "name_en": "STEAK BURGER LOCATION", "price": "L: 200" }, { "id": 246, "name_ar": "تشيز برجر", "name_en": "CHEESE BURGER", "price": "L: 70" }, { "id": 247, "name_ar": "دبل تشيز برجر", "name_en": "DOUBLE CHEESE BURGER", "price": "L: 105" }, { "id": 248, "name_ar": "كفته مشوي", "name_en": "GRILLED KOFTA", "price": "Roll: 160 / L: 160 / M: 120" }, { "id": 249, "name_ar": "شاورما لحمه", "name_en": "BEEF SHAWARMA", "price": "Roll: 185 / L: 185" }, { "id": 250, "name_ar": "فاهيتا لحمه", "name_en": "BEEF FAJITA", "price": "Roll: 185 / L: 185" }, { "id": 251, "name_ar": "سجق", "name_en": "SAUSAGE", "price": "L: 110 / M: 85" }, { "id": 252, "name_ar": "هوت دوج", "name_en": "HOT DOG", "price": "Roll: 100 / L: 110 / M: 85" }, { "id": 253, "name_ar": "ميكسيكان هوت دوج", "name_en": "MEXICAN HOT DOG", "price": "Roll: 130 / L: 130" }] }, { "name": "Sandwich - Sea Food", "items": [{ "id": 254, "name_ar": "جمبري مشوي", "name_en": "GRILLED SHRIMPS", "price": "Roll: 160 / L: 160 / M: 115" }, { "id": 255, "name_ar": "جمبري بانيه", "name_en": "FRIED SHRIMP", "price": "Roll: 160 / L: 160 / M: 115" }, { "id": 256, "name_ar": "فياجرا 2000 مشوي", "name_en": "GRILLED VOYAGER 2000", "price": "Roll: 180 / L: 180" }] }, { "name": "Sandwich - Shawarma Meal", "items": [{ "id": 257, "name_ar": "وجبة شاورما فراخ عربي", "name_en": "ARABIC CHICKEN SHAWARMA MEAL", "price": "190" }, { "id": 258, "name_ar": "وجبة شاورما لحمة عربي", "name_en": "ARABIC MEAT SHAWARMA MEAL", "price": "240" }] }] };

    const FEATURED_IDS = [12, 38, 50, 113, 195, 188, 201, 232, 140, 42];

    function titleCase(str) {
      const smalls = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'of', 'in', 'on', 'at', 'to', 'up', 'as', 'by']);
      return str.toLowerCase().split(' ').map((w, i) => {
        if (i === 0 || !smalls.has(w)) return w.charAt(0).toUpperCase() + w.slice(1);
        return w;
      }).join(' ');
    }
    function slugify(s) { return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''); }
    function parsePrice(priceStr) {
      const s = String(priceStr).trim();
      if (s.includes('/')) {
        const parts = s.split('/').map(p => p.trim());
        return { type: 'multi', parts: parts.map(p => { const ci = p.indexOf(':'); return ci > -1 ? { label: p.slice(0, ci).trim(), value: p.slice(ci + 1).trim() } : { label: '', value: p }; }) };
      }
      return { type: 'single', value: s };
    }
    function renderPriceHTML(priceStr) {
      const p = parsePrice(priceStr);
      if (p.type === 'single') return `<div class="price-single">${p.value}<span class="price-unit"> EGP</span></div>`;
      const rows = p.parts.map(pt => `<div class="price-multi-row">${pt.label ? `<span class="price-multi-lbl">${pt.label}</span>` : ''}<span class="price-multi-val">${pt.value}</span></div>`).join('');
      return `<div class="price-multi">${rows}<div class="price-unit" style="margin-top:1px">EGP</div></div>`;
    }

    const allItems = MENU.categories.flatMap(c => c.items.map(it => ({ ...it, cat: c.name })));

    /* Theme */
    const savedTheme = localStorage.getItem('loc-theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeUI(savedTheme);
    function updateThemeUI(theme) {
      const icon = document.getElementById('theme-icon');
      const label = document.getElementById('theme-label');
      if (icon) icon.textContent = theme === 'dark' ? '🌙' : '☀️';
      if (label) label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    }
    function toggleTheme() {
      document.body.classList.add('theme-transitioning');
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('loc-theme', next);
      updateThemeUI(next);
      setTimeout(() => document.body.classList.remove('theme-transitioning'), 400);
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', toggleTheme);
    themeToggle.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); toggleTheme(); } });

    /* Logo */
    const logoImg = document.getElementById('logo-img');
    logoImg.onload = () => logoImg.classList.add('loaded');
    logoImg.onerror = () => { };

    /* Hamburger */
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); mobileMenu.classList.toggle('open'); });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { hamburger.classList.remove('open'); mobileMenu.classList.remove('open'); }));

    /* Cursor */
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; dot.style.left = mx + 'px'; dot.style.top = my + 'px'; });
    (function animRing() { rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13; ring.style.left = rx + 'px'; ring.style.top = ry + 'px'; requestAnimationFrame(animRing); })();
    document.addEventListener('mouseover', e => {
      if (e.target.closest('a,button,.item-card,.feat-card,.search-item,.theme-toggle')) document.body.classList.add('cursor-hover');
      else document.body.classList.remove('cursor-hover');
    });

    /* Search */
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    function openSearch() { searchOverlay.classList.add('open'); setTimeout(() => searchInput.focus(), 80); }
    function closeSearch() { searchOverlay.classList.remove('open'); searchInput.value = ''; searchResults.innerHTML = ''; }
    searchToggle.addEventListener('click', openSearch);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); } });
    searchOverlay.addEventListener('click', e => { if (e.target === searchOverlay) closeSearch(); });
    searchInput.addEventListener('input', () => {
      const q = searchInput.value.toLowerCase().trim();
      searchResults.innerHTML = '';
      if (!q) return;
      const hits = allItems.filter(it => it.name_en.toLowerCase().includes(q) || it.name_ar.includes(q));
      if (hits.length === 0) { searchResults.innerHTML = '<div style="color:rgba(255,255,255,.4);text-align:center;padding:24px;font-size:14px">No items found</div>'; return; }
      hits.slice(0, 12).forEach(it => {
        const p = parsePrice(it.price);
        const pDisp = p.type === 'single' ? p.value + ' EGP' : p.parts.map(pt => (pt.label ? pt.label + ' ' : '') + pt.value).join(' / ') + ' EGP';
        const el = document.createElement('div');
        el.className = 'search-item';
        el.innerHTML = `<div><div class="search-item-name">${titleCase(it.name_en)}</div><div class="search-item-cat">${it.cat}</div></div><div class="search-item-price">${pDisp}</div>`;
        el.addEventListener('click', () => { closeSearch(); activateTab(slugify(it.cat), true); });
        searchResults.appendChild(el);
      });
    });

    /* Featured */
    const featuredGrid = document.getElementById('featured-grid');
    FEATURED_IDS.forEach(id => {
      const item = allItems.find(it => it.id === id);
      if (!item) return;
      const p = parsePrice(item.price);
      const pDisp = p.type === 'single' ? p.value : p.parts.map(pt => (pt.label ? pt.label + ' ' : '') + pt.value).join(' / ');
      const card = document.createElement('div');
      card.className = 'feat-card';
      card.innerHTML = `<div class="feat-badge">Chef's Pick</div><div class="feat-name">${titleCase(item.name_en)}</div><div class="feat-ar">${item.name_ar}</div><div class="feat-price">${pDisp}</div><div class="feat-egp">EGP</div>`;
      featuredGrid.appendChild(card);
    });

    /* Tabs & Panels */
    const catNavScroll = document.getElementById('cat-nav-scroll');
    const menuArea = document.getElementById('menu-area');
    let currentGroup = null, firstSlug = null;

    MENU.categories.forEach((cat, idx) => {
      const slug = slugify(cat.name);
      if (idx === 0) firstSlug = slug;
      const parts = cat.name.split(' - ');
      const group = parts.length > 1 ? parts[0] : null;
      const label = parts.length > 1 ? parts[1] : cat.name;
      if (group && group !== currentGroup) {
        currentGroup = group;
        const gl = document.createElement('div');
        gl.className = 'cat-group-label';
        gl.textContent = group;
        catNavScroll.appendChild(gl);
      }
      const btn = document.createElement('button');
      btn.className = 'cat-tab';
      btn.textContent = label;
      btn.dataset.slug = slug;
      btn.addEventListener('click', () => activateTab(slug, true));
      catNavScroll.appendChild(btn);

      const panel = document.createElement('div');
      panel.className = 'cat-panel';
      panel.id = 'panel-' + slug;
      panel.dataset.slug = slug;
      const nameParts = label.split(' ');
      const last = nameParts.pop();
      const first = nameParts.join(' ');
      const titleHTML = first ? `${first} <em>${last}</em>` : `<em>${last}</em>`;
      panel.innerHTML = `<div class="cat-panel-header"><div>${group ? `<div class="cat-panel-group">${group}</div>` : ''}<h2 class="cat-panel-title">${titleHTML}</h2></div><div class="cat-panel-count">${cat.items.length} item${cat.items.length !== 1 ? 's' : ''}</div></div><div class="items-grid" id="pgrid-${slug}"></div>`;
      menuArea.appendChild(panel);

      const grid = panel.querySelector('.items-grid');
      cat.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `<div class="item-card-top"><div style="flex:1;min-width:0"><div class="item-name-en">${titleCase(item.name_en)}</div><div class="item-name-ar">${item.name_ar}</div></div><div class="item-price-wrap">${renderPriceHTML(item.price)}</div></div><div class="item-card-footer"><span class="item-tag">${label}</span><span class="item-egp">EGP</span></div>`;
        card.addEventListener('mousemove', e => { const r = card.getBoundingClientRect(); const dx = (e.clientX - r.left - r.width / 2) / r.width; const dy = (e.clientY - r.top - r.height / 2) / r.height; card.style.transform = `translateY(-5px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg)`; });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
        grid.appendChild(card);
      });
    });

    function activateTab(slug, scrollToMenu = false) {
      document.querySelectorAll('.cat-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
      const panel = document.getElementById('panel-' + slug);
      const btn = catNavScroll.querySelector(`[data-slug="${slug}"]`);
      if (panel) panel.classList.add('active');
      if (btn) { btn.classList.add('active'); btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }); }
      if (scrollToMenu) {
        const catNavEl = document.getElementById('cat-nav');
        const offset = catNavEl.getBoundingClientRect().top + window.scrollY;
        const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        window.scrollTo({ top: offset - navH - 4, behavior: 'smooth' });
      }
    }
    if (firstSlug) activateTab(firstSlug);

    /* Scroll */
    const navbar = document.getElementById('navbar');
    const catNav = document.getElementById('cat-nav');
    const backTop = document.getElementById('back-top');
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      navbar.classList.toggle('scrolled', sy > 40);
      catNav.classList.toggle('stuck', sy > catNav.offsetTop);
      backTop.classList.toggle('show', sy > 500);
    }, { passive: true });

    /* Reveal */
    const obs = new IntersectionObserver(entries => { entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }); }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    /* Loader */
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.getElementById('loader').classList.add('out');
        document.body.classList.add('loaded');
      }, 1800);
    });