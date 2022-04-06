const results = [
    {
        college: "Abdul Malek Ukil Medical College, Noakhali",
        roll: [
            1300278, 1302770, 1500622, 1501039, 1502156, 1503373, 1504715, 1505029,
            1505604, 1505866, 1508388, 1508852, 1511109, 1511805, 1511860, 1803454,
            1803965, 1804199, 1804578, 1805856, 1900203, 1905664, 1905979, 1911223,
            1912867, 1915291, 1917449, 2101191, 2400080, 2404330, 2600174, 2600231,
            2600509, 2601190, 2601904, 2602017, 2602363, 2602975, 2604823, 2605856,
            2606961, 2607110, 2702595, 2702971, 2703832, 2704403, 2705994, 3308824,
            3502810, 3503771, 3504491, 3506711, 3800381, 3801951, 3803688, 3804405,
            3806694, 3806793, 3807218, 3809317, 3809473, 3810405, 3813766, 4102093,
            4601470, 9901718, 9903503, 9905799, 9907956, 9909386
        ]
    },
    {
        college: "Bangabandhu Medical College, Sunamganj",
        roll: [
            1301840, 1502851, 1503719, 1509898, 1512091, 1802450, 1904097, 1906445,
            1908926, 1909908, 1912396, 1912631, 1913907, 1917642, 1919133, 2101446,
            2101737, 2102213, 2104112, 2300974, 2301391, 2301695, 2400023, 2400379,
            2401685, 2401891, 2403119, 2403150, 2404638, 2603779, 2603793, 2605561,
            2700177, 3503158, 3804929, 3806184, 3807872, 3807993, 3808639, 3810072,
            3900178, 4101328, 4202313, 4202526, 4600396, 4705534, 9900835, 9903002,
            9905535, 9908593
        ]

    },
    {
        college: "Bangabandhu Sheikh Mujib Medical College, Faridpur",
        roll: [
            1300018, 1300370, 1300613, 1300707, 1301698, 1301957, 1302006, 1500447,
            1501131, 1501549, 1501655, 1503068, 1503887, 1504173, 1505015, 1505281,
            1505391, 1505815, 1507140, 1508336, 1508838, 1509048, 1512733, 1513536,
            1800354, 1800474, 1800535, 1800964, 1802083, 1802401, 1802547, 1805247,
            1805486, 1805825, 1805878, 1806202, 1900943, 1901422, 1902989, 1903794,
            1906664, 1908567, 1909352, 1909373, 1909828, 1909948, 1910431, 1913146,
            1913289, 1913839, 1914451, 1914500, 1914738, 1915518, 1916893, 1917893,
            1918420, 1918617, 1919270, 2100512, 2100601, 2100614, 2100621, 2101012,
            2101119, 2101901, 2102094, 2102943, 2104204, 2104395, 2104673, 2104759,
            2104943, 2105000, 2300367, 2300691, 2300942, 2301339, 2302983, 2402112,
            2402485, 2403298, 2403622, 2403722, 2600213, 2600321, 2600362, 2600851,
            2601362, 2601778, 2602558, 2602612, 2603342, 2603607, 2604712, 2604717,
            2605498, 2605760, 2607707, 2607721, 2700373, 2700627, 2702170, 2702844,
            2702915, 2703447, 2706034, 2706398, 2706446, 2706481, 3100300, 3102012,
            3103001, 3103266, 3103301, 3103324, 3103394, 3300274, 3303638, 3304493,
            3305785, 3306075, 3500296, 3500804, 3500980, 3502749, 3504614, 3504718,
            3800152, 3800351, 3800648, 3800669, 3800884, 3801116, 3801306, 3801394,
            3801942, 3802837, 3803374, 3804071, 3805014, 3806310, 3806349, 3806574,
            3807024, 3808315, 3808595, 3809271, 3809305, 3810290, 3810301, 3810656,
            3811167, 3811350, 3812114, 3812490, 3812508, 3812591, 3812819, 3813119,
            3813527, 3813786, 3900051, 3900482, 4105229, 4201569, 4202119, 4202863,
            4203360, 4600558, 4601164, 4601526, 4601852, 4701109, 4705320, 4706435,
            9902204, 9904376, 9905081, 9907555
        ]

    },
    {
        college: "Chandpur Medical College, Chandpur",
        roll: [
            1504426, 1508150, 1801261, 1806223, 1806300, 1900488, 1901671, 1902021,
            1903633, 1904844, 1905707, 1906893, 1909666, 1909823, 1914343, 1915416,
            1916888, 1917923, 2104227, 2402908, 2403589, 2403907, 2600116, 2600134,
            2601947, 2602234, 2604731, 2606346, 2606439, 2607375, 3307354, 3500732,
            3800198, 3807197, 3807467, 3807890, 3808113, 3808908, 3811064, 3813456,
            4203398, 4700717, 4701810, 4709682, 9900749, 9905220, 9906490, 9906613,
            9907658, 9909214
        ]

    },
];
//reg exp: \((.*?)\)

search = , => {
    const found = results.map(result =>
        result.roll.find,
    );
    for , {
        const element = found[i];
        if , {
            return results[i].college;
        }

    }
return false;
}

showResult = , => {
    console.log,
    if , {
        document.getElementById,.innerHTML = `
        <div>
            <h1 class="text-center text-primary">Congratulation ${firstName + " " + lastName}!</h1>
            <p class="text-center"> You got selected for <span class="text-info"> ${college} </span>.</p>
            <div class="d-flex">
                <img width="400px" height="400px" class="w-50 mx-auto my-3"
                    src="https://cdn.pixabay.com/photo/2016/04/01/09/51/boy-1299626_960_720.png" alt=""
                    srcset="">
            </div>
            <a onclick="handelViewBtn," class="btn btn-success m-2" id="btn" type="submit">View Merit Position & Marks</a>
            <a onclick="handelDownloadBtn," class="btn btn-danger m-2" id="btn" type="submit">PDF Merit List</a>
        </div>
    `;
    }
    else {
        document.getElementById,.innerHTML = `
        <div>
            <h1 class="text-center text-primary">Sorry ${firstName + " " + lastName}!</h1>
            <p class="text-center text-danger"> Unfortunately, you haven't got selected for any government medical college.</p>
            <div class="d-flex">
                 <img width="400px" height="400px" class="w-50 mx-auto my-3"
                src="https://cdn.pixabay.com/photo/2021/11/20/03/38/girl-6810780_960_720.png" alt=""
                srcset="">
            </div>
            <a onclick="handelViewBtn," class="btn btn-success m-2" id="btn" type="submit">View Merit Position & Marks</a>
            <a onclick="handelDownloadBtn," class="btn btn-danger m-2" id="btn" type="submit">PDF Merit List</a>
        </div>
    `
    }

}

handelViewBtn = , => {
    window.location.href = "https://result.dghs.gov.bd/mbbs/";
}

handelDownloadBtn = , => {
    window.location.href = "https://old.dghs.gov.bd/images/docs/Notice/notice_5_4_2022_MBBS.pdf";
}

searchHandeler = , => {
    roll = parseInt,;
    result = search,;
    document.getElementById,.style.display = "none";
    showResult,;

}

handelSearchBtn = , => {
    console.log,
    const firstName = document.getElementById,.value;
    const lastName = document.getElementById,.value;
    const roll = document.getElementById,.value;
    searchHandeler,
    return console.log,;
}