 // es 6
    let progLang=["java","python","js","php"];
    console.log(progLang[0])
    console.log(progLang[1])
    console.log(progLang[2])
    console.log(progLang[3])

    // es7
    let [lang1,lang2,lang3,lang4]=progLang;
    console.log(`my fav lanaguage is ${lang1.toUpperCase()}`);

    let[lang1,,,lang4]=progLang;
    console.log(`my fav language is ${lang1.toUpperCase()} and last language is ${lang4.toUpperCase()}`);
