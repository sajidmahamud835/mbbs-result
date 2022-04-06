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

    }
]

search = (roll) => {
    const found = results.map(result =>
        result.roll.find(res => res === roll)
    );
    for (let i = 0; i < found.length; i++) {
        const element = found[i];
        if (element != undefined) {
            return results[i].college;
        }

    }
    return false;
}

handelSearchBtn = () => {
    console.log('searching...')
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const roll = document.getElementById("roll").value;
    console.log(firstName, lastName, roll)
    return;
}
const input = 9905535;
output = search(input);
console.log(output);