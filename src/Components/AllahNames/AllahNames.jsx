import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./AllahNames.css";
import Nav from "../Navbar/Nav";

let ExplainName = ({
  name,
  pronunciation,
  engName,
  meaning,
  definition,
  mentions,
  menNum1,
  menNum2,
  menNum3,
  menNum4,
  closePage,
}) => {
  return (
    <section style={{ overflowY: "scroll" }} className="openPagesFixComponent">
      <div className="itsCloseNav">
        <FontAwesomeIcon
          onClick={closePage}
          className="fs-1"
          style={{ cursor: "pointer" }}
          icon={faArrowLeft}
        />
      </div>

      <div className="container">
        <div className="p-3">
          <div
            style={{
              height: "220px",
              backgroundColor: "black",
              // border: "1px solid rgba(255, 255, 255, 0.100)",
              borderRadius: "6px",
              boxShadow: "0 0 15px 3px rgba(125, 125, 125, 0.1)",
              fontSize: "55px",
            }}
            className="w-100 d-flex justify-content-center align-items-center"
          >
            <div className="text-center">
              <p>{name}</p>
              <p className="fs-2">{engName}</p>
            </div>
          </div>
        </div>

        <div className="p-3" style={{ marginTop: "25px" }}>
          <p className="fs-4 fw-bold">
            Pronunciation: <span className="fw-normal">{pronunciation}</span>
          </p>
          <p className="fs-4 fw-bold">
            Meaning: <span className="fw-normal">{meaning}</span>
          </p>
          <div>
            <hr />
            <p className="fs-4 fw-bold">
              definition: <span className="fw-normal">{definition}</span>
            </p>
            <hr />
            <p className="fs-4 fw-bold">
              Mentions in Quran and Hadiths:{" "}
              <span className="fw-normal">{mentions}</span>
            </p>
            <hr />
            <div style={{ lineHeight: "1.8" }}>
              <p className="fs-4">{menNum1}</p>
              <p className="fs-4">{menNum2}</p>
              <p className="fs-4">{menNum3}</p>
              <p className="fs-4">{menNum4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

let AllahName = ({
  name,
  pronunciation,
  meaning,
  definition,
  mentions,
  menNum1,
  menNum2,
  menNum3,
  menNum4,
  engName,
}) => {
  const [explainNameOpen, setExplainNameOpen] = useState(false);
  const handleExplain = () => {
    setExplainNameOpen(true);
  };
  const closeExplain = () => {
    setExplainNameOpen(false);
  };

  return (
    <>
      <div onClick={handleExplain} className="nameCard">
        <div className="textParent">
          <p>{name}</p>
          <p className="englishName">{engName}</p>
        </div>
      </div>

      {explainNameOpen && (
        <ExplainName
          name={name}
          pronunciation={pronunciation}
          engName={engName}
          meaning={meaning}
          definition={definition}
          mentions={mentions}
          menNum1={menNum1}
          menNum2={menNum2}
          menNum3={menNum3}
          menNum4={menNum4}
          closePage={closeExplain}
        />
      )}
    </>
  );
};

function AllahNames() {
  // const namesBox = [
  //   {
  //     name: "القُدُّوسُ",
  //   },
  //   {
  //     name: "المَلِكُ",
  //   },
  //   {
  //     name: "الرَّحِيمُ",
  //   },
  //   {
  //     name: "الرَّحْمَنُ",
  //   },

  //   {
  //     name: "العَزِيزُ",
  //   },
  //   {
  //     name: "المُهَيْمِنُ",
  //   },
  //   {
  //     name: "المُؤمِنُ",
  //   },
  //   {
  //     name: "السَّلاَمُ",
  //   },

  //   {
  //     name: "البَارِئُ",
  //   },
  //   {
  //     name: "الْخَالِقُ",
  //   },
  //   {
  //     name: "الْمُتَكَبِّرُ",
  //   },
  //   {
  //     name: "الجَبَّارُ",
  //   },

  //   {
  //     name: "الوَهَّابُ",
  //   },
  //   {
  //     name: "القَهَّارُ",
  //   },
  //   {
  //     name: "الغَفَّارُ",
  //   },
  //   {
  //     name: "المُصَوِّرُ",
  //   },

  //   {
  //     name: "القَابِضُ",
  //   },
  //   {
  //     name: "العَلِيمُ",
  //   },
  //   {
  //     name: "الفَتَّاحُ",
  //   },
  //   {
  //     name: "الرَّزَّاقُ",
  //   },

  //   {
  //     name: "المُعِزُّ",
  //   },
  //   {
  //     name: "الرَّافِعُ",
  //   },
  //   {
  //     name: "الخَافِضُ",
  //   },
  //   {
  //     name: "البَاسِطُ",
  //   },

  //   {
  //     name: "العَدْلُ",
  //   },
  //   {
  //     name: "الحَكَمُ",
  //   },
  //   {
  //     name: "البَصِيرُ",
  //   },
  //   {
  //     name: "السَّمِيعُ",
  //   },

  //   {
  //     name: "العَظِيمُ",
  //   },
  //   {
  //     name: "الحَلِيمُ",
  //   },
  //   {
  //     name: "الخَبِيرُ",
  //   },
  //   {
  //     name: "اللَّطِيفُ",
  //   },

  //   {
  //     name: "الكَبِيرُ",
  //   },
  //   {
  //     name: "العَلِيُّ",
  //   },
  //   {
  //     name: "الشَّكُورُ",
  //   },
  //   {
  //     name: "الغَفُورُ",
  //   },

  //   {
  //     name: "الجَلِيلُ",
  //   },
  //   {
  //     name: "الحَسِيبُ",
  //   },
  //   {
  //     name: "المُقِيتُ",
  //   },
  //   {
  //     name: "الحَفِيظُ",
  //   },

  //   {
  //     name: "الوَاسِعُ",
  //   },
  //   {
  //     name: "المُجِيبُ",
  //   },
  //   {
  //     name: "الرَّقِيبُ",
  //   },
  //   {
  //     name: "الكَرِيمُ",
  //   },

  //   {
  //     name: "البَاعِثُ",
  //   },
  //   {
  //     name: "المَجِيدُ",
  //   },
  //   {
  //     name: "الوَدُودُ",
  //   },
  //   {
  //     name: "الحَكِيمُ",
  //   },

  //   {
  //     name: "القَوِيُّ",
  //   },
  //   {
  //     name: "الوَكِيلُ",
  //   },
  //   {
  //     name: "الحَقُّ",
  //   },
  //   {
  //     name: "الشَّهِيدُ",
  //   },

  //   {
  //     name: "المُحْصِي",
  //   },
  //   {
  //     name: "الحَمِيدُ",
  //   },
  //   {
  //     name: "الوَلِيُّ",
  //   },
  //   {
  //     name: "المَتِينُ",
  //   },

  //   {
  //     name: "المُمِيتُ",
  //   },
  //   {
  //     name: "المُحْيِي",
  //   },
  //   {
  //     name: "المُعِيدُ",
  //   },
  //   {
  //     name: "المُبْدِئُ",
  //   },

  //   {
  //     name: "المَاجِدُ",
  //   },
  //   {
  //     name: "الوَاجِدُ",
  //   },
  //   {
  //     name: "القَيُّومُ",
  //   },
  //   {
  //     name: "الحَيُّ",
  //   },

  //   {
  //     name: "المُقْتَدِرُ",
  //   },
  //   {
  //     name: "القَادِرُ",
  //   },
  //   {
  //     name: "الصَّمَدُ",
  //   },
  //   {
  //     name: "الأَحَدُ",
  //   },

  //   {
  //     name: "الآخِرُ",
  //   },
  //   {
  //     name: "الأَوَّلُ",
  //   },
  //   {
  //     name: "المُؤَخِّرُ",
  //   },
  //   {
  //     name: "المُقَدِّمُ",
  //   },

  //   {
  //     name: "المُتَعَالِي",
  //   },
  //   {
  //     name: "الوَالِي",
  //   },
  //   {
  //     name: "البَاطِنُ",
  //   },
  //   {
  //     name: "الظَّاهِرُ",
  //   },

  //   {
  //     name: "العَفُوُ",
  //   },
  //   {
  //     name: "المُنْتَقِمُ",
  //   },
  //   {
  //     name: "التَّوَابُ",
  //   },
  //   {
  //     name: "البَرُّ",
  //   },

  //   {
  //     name: "وَالإكْرَامِ",
  //   },
  //   {
  //     name: "ذُوالجَلَالِ",
  //   },
  //   {
  //     name: "مَالِكُ المُلْكِ",
  //   },
  //   {
  //     name: "الرَّؤُوفُ",
  //   },

  //   {
  //     name: "الغَنيُ",
  //   },
  //   {
  //     name: "الجَامِعُ",
  //   },
  //   {
  //     name: "المُقْسِطُ",
  //   },
  // ];

  const callNames = [
    {
      id: 1,
      name: "الرَّحْمَنُ",
      engName: "AR-RAHMAN",
      pronunciation: "ar-rahmaan",
      meaning: "The Most Gracious",
      definition:
        "AR-RAHMAN is the One whose mercy encompasses all of His creation, granting blessings and showing compassion universally.",
      mentions:
        "This name is mentioned in several places in the Quran, such as:",
      menNum1: "سورة الفاتحة آية ۲: الرَّحْمَنِ الرَّحِيمِ",
      menNum2:
        "سورة مريم آية ٥٨: إِذَا تُتْلَىٰ عَلَيْهِمْ آيَاتُ الرَّحْمَٰنِ خَرُّوا۟ سُجَّدًۭا وَبُكِيًّۭا",
      menNum3:
        "سورة الملك آية ٢٩: قُلْ هُوَ الرَّحْمَٰنُ ءَامَنَّا بِهِۦ وَعَلَيْهِ تَوَكَّلْنَا",
      menNum4: "سورة طه آية ٥: الرَّحْمَٰنُ عَلَى ٱلْعَرْشِ ٱسْتَوَىٰ",
    },
    {
      id: 2,
      name: "الرَّحِيمُ",
      engName: "AR-RAHEEM",
      pronunciation: "ar-raheem",
      meaning: "The Most Merciful",
      definition:
        "AR-RAHEEM is the One whose mercy is specific to the believers, granting them forgiveness, guidance, and blessings in both this world and the Hereafter.",
      mentions: "This name frequently appears in the Quran, such as in:",
      menNum1: "سورة الفاتحة آية ۲: الرَّحْمَنِ الرَّحِيمِ",
      menNum2: "سورة البقرة آية ٣٧: إِنَّهُ هُوَ ٱلتَّوَّابُ ٱلرَّحِيمُ",
      menNum3: "سورة آل عمران آية ٣١: فَإِنَّ ٱللَّهَ غَفُورٌۭ رَّحِيمٌۭ",
      menNum4: "سورة النساء آية ٩٦: وَكَانَ ٱللَّهُ غَفُورًۭا رَّحِيمًۭا",
    },
    {
      id: 3,
      name: "المَلِكُ",
      engName: "AL-MALIK",
      pronunciation: "al-malik",
      meaning: "The King",
      definition:
        "AL-MALIK is the One who is the absolute Sovereign and Owner of all creation, governing all affairs with justice and wisdom.",
      mentions: "This name appears in the Quran in various places, such as:",
      menNum1:
        "سورة الحشر آية ٢٣: هُوَ ٱللَّهُ ٱلَّذِى لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْمَلِكُ ٱلْقُدُّوسُ",
      menNum2:
        "سورة الجمعة آية ١: يُسَبِّحُ لِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ٱلْمَلِكِ ٱلْقُدُّوسِ",
      menNum3: "سورة طه آية ١١٤: فَتَعَٰلَى ٱللَّهُ ٱلْمَلِكُ ٱلْحَقُّ",
      menNum4: "سورة المؤمنون آية ١١٦: فَتَعَٰلَى ٱللَّهُ ٱلْمَلِكُ ٱلْحَقُّ",
    },
    {
      id: 4,
      name: "القُدُّوسُ",
      engName: "AL-QUDDUS",
      pronunciation: "al-quddoos",
      meaning: "The Pure, The Holy",
      definition:
        "AL-QUDDUS is the One who is free from all imperfection, possessing complete and absolute purity.",
      mentions: "This name is found in the Quran, such as in:",
      menNum1:
        "سورة الحشر آية ٢٣: هُوَ ٱللَّهُ ٱلَّذِى لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْمَلِكُ ٱلْقُدُّوسُ",
      menNum2:
        "سورة الجمعة آية ١: يُسَبِّحُ لِلَّهِ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ٱلْمَلِكِ ٱلْقُدُّوسِ",
      menNum3:
        "سورة البقرة آية ٣٠: وَنَحْنُ نُسَبِّحُ بِحَمْدِكَ وَنُقَدِّسُ لَكَ",
      menNum4: "سورة النساء آية ١٢٥: وَكَانَ ٱللَّهُ عَلِيمًۭا قُدُّوسًۭا",
    },
    {
      id: 5,
      name: "السَّلَامُ",
      engName: "AS-SALAM",
      pronunciation: "as-salaam",
      meaning: "The Source of Peace and Safety",
      definition:
        "AS-SALAM is the One who is free from all imperfections and bestows peace, security, and safety upon His creation.",
      mentions:
        "This name is mentioned in the Quran in various places, such as:",
      menNum1:
        "سورة الحشر آية ٢٣: هُوَ ٱللَّهُ ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَـٰمُ",
      menNum2: "سورة يونس آية ٢٥: وَٱللَّهُ يَدْعُوٓ إِلَىٰ دَارِ ٱلسَّلَـٰمِ",
      menNum3:
        "سورة الأنعام آية ٥٤: كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ ٱلرَّحْمَةَ ۖ أَنَّهُۥ مَنۡ عَمِلَ مِنكُمۡ سُوٓءٗا بِجَهَـٰلَةٖ ثُمَّ تَابَ مِنۢ بَعۡدِهِۦ وَأَصۡلَحَ فَأَنَّهُۥ غَفُورٞ رَّحِيمٞ",
      menNum4:
        "سورة الكهف آية ٤٤: هُنَالِكَ ٱلۡوَلَٰيَةُ لِلَّهِ ٱلۡحَقِّۚ هُوَ خَيۡرٞ ثَوَابٗا وَخَيۡرٗا عُقۡبٗا",
    },
    {
      id: 6,
      name: "المُؤْمِنُ",
      engName: "AL-MU’MIN",
      pronunciation: "al-mu’min",
      meaning: "The Guardian of Faith",
      definition:
        "AL-MU’MIN is the One who provides security and faith, granting safety and assurance to His creation.",
      mentions: "This name is mentioned in the Quran in places such as:",
      menNum1:
        "سورة الحشر آية ٢٣: هُوَ ٱللَّهُ ٱلْمُؤْمِنُ ٱلْمُهَيْمِنُ ٱلْعَزِيزُ",
      menNum2: "سورة النساء آية ١٣٦: فَآمِنُوا۟ بِٱللَّهِ وَرَسُولِهِۦ",
      menNum3:
        "سورة الأحزاب آية ٤٣: هُوَ ٱلَّذِى يُصَلِّى عَلَيْكُمْ وَمَلَٰٓئِكَتُهُۥ لِيُخْرِجَكُم مِّنَ ٱلظُّلُمَٰتِ إِلَى ٱلنُّورِ",
      menNum4:
        "سورة التغابن آية ١١: وَمَن يُؤْمِنۢ بِٱللَّهِ يَهۡدِ قَلۡبَهُۥۚ",
    },
    {
      id: 7,
      name: "المُهَيْمِنُ",
      engName: "AL-MUHAYMIN",
      pronunciation: "al-muhaymin",
      meaning: "The Guardian, The Witness, The Overseer",
      definition:
        "AL-MUHAYMIN is the One who watches over and protects everything, ensuring order and justice.",
      mentions: "This name is found in the Quran in places such as:",
      menNum1:
        "سورة الحشر آية ٢٣: هُوَ ٱللَّهُ ٱلْمُهَيْمِنُ ٱلْمَلِكُ ٱلْعَزِيزُ",
      menNum2:
        "سورة النساء آية ١٦٥: ٱلرُّسُلَ مُبَشِّرِينَ وَمُنذِرِينَ لِئَلَّا يَكُونَ لِلنَّاسِ عَلَى ٱللَّهِ حُجَّةٌۭ بَعۡدَ ٱلرُّسُلِ",
      menNum3:
        "سورة البقرة آية ٢٨٥: ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيۡهِ مِن رَّبِّهِۦ",
      menNum4: "سورة المائدة آية ٤٨: وَمُهَيْمِنًا عَلَيۡهِۦ",
    },
    {
      id: 8,
      name: "ٱلْعَزِيزُ",
      engName: "AL-AZIZ",
      pronunciation: "al-aziz",
      meaning: "The Almighty, The Invulnerable",
      definition:
        "AL-AZIZ is the One who is All-Powerful and cannot be overcome, possessing complete authority and might.",
      mentions: "This name frequently appears in the Quran, such as in:",
      menNum1: "سورة الحشر آية ٢٣: هُوَ ٱللَّهُ ٱلْمُهَيْمِنُ ٱلْعَزِيزُ",
      menNum2:
        "سورة البقرة آية ٢٠٩: فَإِنزَلَقَتِ ٱلۡأَقۡدَامُ بَعۡدَ ثُبُوتِهَا",
      menNum3: "سورة الأنعام آية ٦١: وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ",
      menNum4:
        "سورة غافر آية ٣: غَافِرِ ٱلذَّنۢبِ وَقَابِلِ ٱلتَّوۡبِ ذِى ٱلطَّوۡلِۚ لَآ إِلَـٰهَ إِلَّا هُوَۖ",
    },
    {
      id: 9,
      name: "ٱلۡجَبَّارُ",
      engName: "AL-JABBAR",
      pronunciation: "al-jabbaar",
      meaning: "The Compeller",
      definition:
        "AL-JABBAR is the One who compels and restores, mending the broken and enforcing His will upon His creation.",
      mentions: "This name appears in the Quran in places such as:",
      menNum1: "سورة الحشر آية ٢٣: ٱلۡمُؤۡمِنُ ٱلۡجَبَّارُ ٱلۡمُتَكَبِّرُ",
      menNum2:
        "سورة النساء آية ١٢٧: يُرِيدُ ٱللَّهُ لِيُبَيِّنَ لَكُمۡ وَيَهۡدِيَكُمۡ سُنَنَ ٱلَّذِينَ مِن قَبۡلِكُمۡ",
      menNum3:
        "سورة إبراهيم آية ٤٨: يَوۡمَ تُبَدَّلُ ٱلۡأَرۡضُ غَيۡرَ ٱلۡأَرۡضِ وَٱلسَّمَٰوَٰتُ",
      menNum4:
        "سورة ق آية ١٦: وَلَقَدۡ خَلَقۡنَا ٱلۡإِنسَٰنَ وَنَعۡلَمُ مَا تُوَسۡوِسُ بِهِۦ نَفۡسُهُۥ",
    },
    {
      id: 10,
      name: "ٱلۡمُتَكَبِّرُ",
      engName: "AL-MUTAKABBIR",
      pronunciation: "al-mutakabbir",
      meaning: "The Supreme, The Majestic",
      definition:
        "AL-MUTAKABBIR is the One who is supremely great and above all His creation, free from all deficiencies.",
      mentions: "This name is found in the Quran, such as in:",
      menNum1: "سورة الحشر آية ٢٣: ٱلۡمُتَكَبِّرُ ٱلۡعَزِيزُ",
      menNum2:
        "سورة التغابن آية ١٨: ٱللَّهُ ٱلۡمُتَكَبِّرُ عَلَىٰ كُلِّ شَيۡءٖ",
      menNum3: "سورة البقرة آية ٢٥٥: وَهُوَ ٱلۡعَلِيُّ ٱلۡعَظِيمُ",
      menNum4: "سورة القصص آية ٨٨: وَلَا تَدۡعُ مَعَ ٱللَّهِ إِلَٰهًا ءَاخَرَ",
    },
    {
      id: 11,
      name: "ٱلۡخَالِقُ",
      engName: "AL-KHALIQ",
      pronunciation: "al-khaaliq",
      meaning: "The Creator, the Maker",
      definition:
        "AL-KHALIQ is the One who brings everything into existence from nothing and creates all things perfectly.",
      mentions: "This name frequently appears in the Quran, such as in:",
      menNum1:
        "سورة الحشر آية ٢٤: هُوَ ٱللَّهُ ٱلۡخَالِقُ ٱلۡبَارِئُ ٱلۡمُصَوِّرُ",
      menNum2: "سورة البقرة آية ١١٧: بَدِيعُ ٱلسَّمَٰوَٰتِ وَٱلۡأَرۡضِ",
      menNum3:
        "سورة المؤمنون آية ١٤: فَتَبَارَكَ ٱللَّهُ أَحۡسَنُ ٱلۡخَٰلِقِينَ",
      menNum4:
        "سورة الملك آية ٢٤: قُلۡ هُوَ ٱلَّذِي خَلَقَكُمۡ وَجَعَلَ لَكُمُ",
    },
    {
      id: 12,
      name: "ٱلۡبَارِئُ",
      engName: "AL-BAARI",
      pronunciation: "al-baari",
      meaning: "The Evolver",
      definition:
        "AL-BAARI is the One who creates in proportion and evolves His creation with precision and harmony.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة الحشر آية ٢٤: ٱلۡبَارِئُ ٱلۡمُصَوِّرُ",
      menNum2: "سورة البقرة آية ١٨١: فَمَنۡ بَدَّلَهُۥ بَعۡدَ مَا سَمِعَهُۥ",
      menNum3:
        "سورة آل عمران آية ١٩٥: إِنِّي لَآ أُضِيعُ عَمَلَ عَٰمِلٖ مِّنكُم",
      menNum4:
        "سورة النساء آية ١٣: وَمَنۡ يُطِعِ ٱللَّهَ وَرَسُولَهُۥ يُدۡخِلۡهُ جَنَّٰتٖ",
    },
    {
      id: 13,
      name: "ٱلۡمُصَوِّرُ",
      engName: "AL-MUSAWWIR",
      pronunciation: "al-musawwir",
      meaning: "The Fashioner, the Shaper",
      definition:
        "AL-MUSAWWIR is the One who forms His creation in the best and most perfect designs.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة الحشر آية ٢٤: هُوَ ٱللَّهُ ٱلۡمُصَوِّرُ ٱلۡبَارِئُ",
      menNum2: "سورة غافر آية ٦٤: ٱلَّذِي جَعَلَ لَكُمُ ٱلۡأَرۡضَ قَرَارٗا",
      menNum3:
        "سورة آل عمران آية ٦: هُوَ ٱلَّذِي يُصَوِّرُكُمۡ فِي ٱلۡأَرۡحَامِ",
      menNum4: "سورة البقرة آية ٢٢: ٱلَّذِي جَعَلَ لَكُمُ ٱلۡأَرۡضَ فِرَٰشٗا",
    },
    {
      id: 14,
      name: "ٱلۡغَفَّارُ",
      engName: "AL-GHAFFAR",
      pronunciation: "al-ghaffaar",
      meaning: "The Constant Forgiver",
      definition:
        "AL-GHAFFAR is the One who repeatedly forgives, concealing the sins of His servants and granting them mercy.",
      mentions: "This name is frequently mentioned in the Quran, such as in:",
      menNum1:
        "سورة نوح آية ١٠: فَقُلۡتُ ٱسۡتَغۡفِرُواْ رَبَّكُمۡ إِنَّهُۥ كَانَ غَفَّارٗا",
      menNum2: "سورة طه آية ٨٢: وَإِنِّي لَغَفَّارٞ لِّمَن تَابَ وَءَامَنَ",
      menNum3:
        "سورة الفرقان آية ٧٠: فَأُوْلَٰٓئِكَ يُبَدِّلُ ٱللَّهُ سَيِّـَٔاتِهِمۡ",
      menNum4:
        "سورة الزمر آية ٥٣: قُلۡ يَٰعِبَادِيَ ٱلَّذِينَ أَسۡرَفُواْ عَلَىٰٓ أَنفُسِهِمۡ",
    },
    {
      id: 15,
      name: "ٱلۡقَهَّارُ",
      engName: "AL-QAHHAR",
      pronunciation: "al-qahhaar",
      meaning: "The All-Subduer, the Ever-Dominating",
      definition:
        "AL-QAHHAR is the One who is irresistible and dominant over all His creation, subduing everything under His control.",
      mentions: "This name appears in the Quran, such as in:",
      menNum1: "سورة الرعد آية ١٦: قُلِ ٱللَّهُ خَٰلِقُ كُلِّ شَيۡءٖ",
      menNum2: "سورة يوسف آية ٣٩: أَأَرۡبَابٞ مُّتَفَرِّقُونَ خَيۡرٌ",
      menNum3: "سورة ص آية ٦٥: إِنَّمَآ إِلَٰهُكُمۡ إِلَٰهٌۭ وَٰحِدٞ",
      menNum4: "سورة الزمر آية ٤: وَهُوَ ٱلۡقَاهِرُ فَوۡقَ عِبَادِهِۦ",
    },
    {
      id: 16,
      name: "ٱلۡوَهَّابُ",
      engName: "AL-WAHHAB",
      pronunciation: "al-wahhaab",
      meaning: "The Supreme Bestower",
      definition:
        "AL-WAHHAB is the One who gives abundantly and generously without expecting anything in return.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1:
        "سورة ص آية ٩: أَمۡ عِندَهُمۡ خَزَآئِنُ رَحۡمَةِ رَبِّكَ ٱلۡعَزِيزِ ٱلۡوَهَّابِ",
      menNum2:
        "سورة آل عمران آية ٨: رَبَّنَا لَا تُزِغۡ قُلُوبَنَا بَعۡدَ إِذۡ هَدَيۡتَنَا",
      menNum3: "سورة البقرة آية ٢٦٩: يُؤۡتِي ٱلۡحِكۡمَةَ مَن يَشَآءُ",
      menNum4:
        "سورة إبراهيم آية ٣٤: وَءَاتَىٰكُم مِّن كُلِّ مَا سَأَلۡتُمُوهُۚ",
    },
    {
      id: 17,
      name: "الرَّزَّاقُ",
      engName: "AR-RAZZAAQ",
      pronunciation: "ar-razzaaq",
      meaning: "The Provider",
      definition:
        "AR-RAZZAAQ is the One who provides sustenance to all of His creation, supplying their needs in abundance.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة الذاريات آية ٥٨: إِنَّ ٱللَّهَ هُوَ ٱلرَّزَّاقُ",
      menNum2:
        "سورة المُلْك آية ١٥: هُوَ ٱلَّذِي جَعَلَ لَكُمُ ٱلۡأَرۡضَ خَٰلِدَةً",
      menNum3: "سورة البقرة آية ٣٧: وَتَحْسَبُهُۥ جَٰمِدًا وَهُوَ يَحْيَا",
      menNum4: "سورة النحل آية ٧: وَٱللَّهُ خَٰلِقُ كُلِّ شَيۡءٍۢ",
    },
    {
      id: 18,
      name: "ٱلۡفَتَّاحُ",
      engName: "AL-FATTAAH",
      pronunciation: "al-fattah",
      meaning: "The Supreme Opener",
      definition:
        "AL-FATTAAH is the One who opens all doors, granting success, victory, and solutions to every problem.",
      mentions: "This name is found in the Quran, such as in:",
      menNum1: "سورة ص آية ٤٧: يَوۡمَ لَا يُغۡنِى فَجۡرُهُۥ",
      menNum2: "سورة الأنفال آية ١: وَٱللَّهُ فَتَّحَ مَنۡفَذُهُۥ",
      menNum3: "سورة الفتح آية ١: إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
      menNum4: "سورة الحجر آية ٧: إِنَّ رَبَّكَ هُوَ ٱلۡفَتَّاحُ",
    },
    {
      id: 19,
      name: "ٱلۡعَلِيمُ",
      engName: "AL-‘ALEEM",
      pronunciation: "al-‘aleem",
      meaning: "The All-Knowing",
      definition:
        "AL-‘ALEEM is the One who has full and perfect knowledge of everything, past, present, and future.",
      mentions: "This name is often found in the Quran, such as in:",
      menNum1: "سورة النحل آية ١٠: ٱلۡعَلِيمُ بَصِيرٌ",
      menNum2: "سورة المجادلة آية ١: إِنَّ ٱللَّهَ سَمِيعٌ عَلِيمٌ",
      menNum3: "سورة البقرة آية ٢٠٥: إِنَّ ٱللَّهَ عَلِيمٌ بِمَا تَعْمَلُونَ",
      menNum4: "سورة النساء آية ١: إِنَّ ٱللَّهَ كَانَ عَلِيمًا حَكِيمًا",
    },
    {
      id: 20,
      name: "ٱلۡقَوِيُّ",
      engName: "AL-QAWIYY",
      pronunciation: "al-qawiyy",
      meaning: "The All-Strong",
      definition:
        "AL-QAWIYY is the One who is most strong and powerful, having complete power over everything.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة النساء آية ٣٣: إِنَّ ٱللَّهَ كَانَ قَوِيًّا عَزِيزًا",
      menNum2: "سورة الحشر آية ٢٢: ٱللَّهُ ٱلۡقَوِيُّ ٱلۡمَتِينَ",
      menNum3: "سورة البقرة آية ١٦: إِنَّ ٱللَّهَ قَوِيٌّ عَزِيزٌ",
      menNum4: "سورة الطلاق آية ١: وَٱللَّهُ بِكُلِّ شَيۡءٍ عَلِيمٌ",
    },
    {
      id: 21,
      name: "ٱلۡمَتِينُ",
      engName: "AL-MATEEN",
      pronunciation: "al-mateen",
      meaning: "The Firm, the Steadfast",
      definition:
        "AL-MATEEN is the One who is strong, firm, and unshakable, with His power being solid and unchangeable.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة النساء آية ٩: وَٱللَّهُ عَلِيمٌۢ حَكِيمٌ",
      menNum2: "سورة الحشر آية ٢٢: ٱللَّهُ ٱلۡمَتِينُ فَوۡقَ عِبَادِهِۥ",
      menNum3: "سورة الأنفال آية ٤: وَٱللَّهُ بَصِيرٌۭ بِمَا يَعْمَلُونَ",
      menNum4: "سورة الرعد آية ٣: وَٱلۡمَتِينَ فِى ٱلۡفِكَرِ",
    },
    {
      id: 22,
      name: "ٱلۡوَكِيلُ",
      engName: "AL-WAKEEL",
      pronunciation: "al-wakeel",
      meaning: "The Trustee, the Disposer of Affairs",
      definition:
        "AL-WAKEEL is the One who is entrusted with the affairs of His servants and to whom they turn for help and support.",
      mentions: "This name appears in the Quran, such as in:",
      menNum1: "سورة آل عمران آية ١٨: وَٱللَّهُ وَكِيلٌۭ عَلَىٰكُمۡ",
      menNum2: "سورة النساء آية ١: وَٱللَّهُ وَكِيلٌۭ عَلَىٰكُمۡ",
      menNum3: "سورة الطلاق آية ٣: وَٱللَّهُ وَكِيلٌۭ عَلَىٰكُمۡ",
      menNum4: "سورة غافر آية ٤٤: وَٱللَّهُ وَكِيلٌۭ عَلَىٰكُمۡ",
    },
    {
      id: 23,
      name: "ٱلۡحَسِيبُ",
      engName: "AL-HASEEB",
      pronunciation: "al-haseeb",
      meaning: "The Reckoner, the Sufficient",
      definition:
        "AL-HASEEB is the One who takes account of all actions and provides sufficiency to His servants in all matters.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة النساء آية ٦: وَكَفَىٰٰ بِهِۦۤ حَسِيبٖا",
      menNum2: "سورة الحشر آية ٢٢: ٱللَّهُ حَسِيبٌۭ عَلَيْهِ",
      menNum3: "سورة البقرة آية ٢٢١: وَٱللَّهُ بِهَسِيبٖا",
      menNum4: "سورة آل عمران آية ١٨: ٱللَّهُ حَسِيبٌۭ عَلَىٰكُمۡ",
    },
    {
      id: 24,
      name: "ٱلۡجَلِيلُ",
      engName: "AL-JALEEL",
      pronunciation: "al-jaleel",
      meaning: "The Majestic",
      definition:
        "AL-JALEEL is the One who is great in His majesty, honored, and revered above all.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة الحشر آية ٢٣: هُوَ ٱللَّهُ ٱلۡجَلِيلُ",
      menNum2: "سورة السجدة آية ٤: فَفَجَّرْنَا ٱلۡجَلِيلَ",
      menNum3: "سورة الفتح آية ١: إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
      menNum4: "سورة الأعراف آية ٥٧: ٱلۡجَلِيلُ",
    },
    {
      id: 25,
      name: "ٱلۡمُجِيبُ",
      engName: "AL-MUJEEB",
      pronunciation: "al-mujeeb",
      meaning: "The Responder to Prayer",
      definition:
        "AL-MUJEEB is the One who answers the call of the supplicant and responds to the needs of His servants.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة الشورى آية ٢٧: إِنَّ رَبَّكُمُ ٱلۡمُجِيبُ",
      menNum2: "سورة آل عمران آية ١٩: قُلۡ ٱللَّهُ أَعۡلَمُ بِحِسَابِكُمُ",
      menNum3: "سورة إبراهيم آية ٣٩: إِنَّ رَبَّكُمُ ٱلۡمُجِيبُ",
      menNum4: "سورة الأنفال آية ٢: فَٱللَّهُ أَعۡلَمُ بِمَنۡ أَعۡدَىٰ",
    },
    {
      id: 26,
      name: "ٱلۡبَاسِطُ",
      engName: "AL-BAASIT",
      pronunciation: "al-baasit",
      meaning: "The Extender",
      definition:
        "AL-BAASIT is the One who expands and extends His mercy, grace, and sustenance to His servants.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة الفتح آية ١: إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
      menNum2: "سورة الرحمن آية ٣: فَٱللَّهُ ٱلۡبَاسِطُ",
      menNum3: "سورة النجم آية ٤٥: يَٰحَسَرَةًۭ",
      menNum4: "سورة آل عمران آية ١٠: إِنَّ ٱللَّهَ فَٰتِحٌۭ عَلَىٰكُم",
    },
    {
      id: 27,
      name: "ٱلۡخَافِضُ",
      engName: "AL-KHAAFIDH",
      pronunciation: "al-khaafidh",
      meaning: "The Reducer",
      definition:
        "AL-KHAAFIDH is the One who lowers, reduces, or diminishes, and elevates those He wills.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة النحل آية ٢٥: وَٱللَّهُ خَٰفِضٌۭ عَلَىٰكُمُ",
      menNum2: "سورة آل عمران آية ١٨: إِنَّ ٱللَّهَ خَٰفِضٌۭ عَلَيْهِ",
      menNum3: "سورة المرسلات آية ٣: إِنَّ اللَّهَ خَٰفِضٌۭ",
      menNum4: "سورة الأنفال آية ١٨: فَٱللَّهُ خَٰفِضٌۭ عَلَيۡهِ",
    },
    {
      id: 28,
      name: "ٱلۡمُعِزُّ",
      engName: "AL-MUEEZ",
      pronunciation: "al-mu'izz",
      meaning: "The Honourer, the Bestower",
      definition:
        "AL-MUEEZ is the One who grants honor, elevates, and makes distinguished whom He wills.",
      mentions: "This name is found in the Quran, such as in:",
      menNum1: "سورة آل عمران آية ١٨: إِنَّ ٱللَّهَ مُعِزٌۭ",
      menNum2: "سورة الفتح آية ١: إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
      menNum3: "سورة النجم آية ٤٥: وَيُعِزُّ",
      menNum4: "سورة الرعد آية ١٧: إِنَّ ٱللَّهَ مُعِزٌۭ",
    },
    {
      id: 29,
      name: "ٱلۡفَتَّاحُ",
      engName: "AL-FATTAAH",
      pronunciation: "al-fattah",
      meaning: "The Supreme Opener",
      definition:
        "AL-FATTAAH is the One who opens doors of mercy, knowledge, and sustenance, and resolves matters with ease.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة آل عمران آية ١٩: إِنَّ رَبَّكَ فَتَّاحٌۭ",
      menNum2: "سورة الفتح آية ١: فَتَحَ اللَّهُ لَكَ فَتْحًا",
      menNum3: "سورة الشورى آية ٤٢: وَفَتَّاحُ",
    },
    {
      id: 30,
      name: "ٱلۡعَلِيۤمُ",
      engName: "AL-‘ALEEM",
      pronunciation: "al-‘aleem",
      meaning: "The All-Knowing",
      definition:
        "AL-‘ALEEM is the One who is fully aware of all that happens in the heavens and the earth, and He knows everything about His creation.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة النساء آية ١: إِنَّ ٱللَّهَ عَلِيمٌۭ",
      menNum2: "سورة الأعراف آية ١١: وَفَارِغٌۭ عَلِيمٌۭ",
      menNum3: "سورة الإسراء آية ٢٣: ٱللَّهُ عَلِيمٌۭ بِمَا فِى ٱلۡسَمَٰوَٰتِ",
      menNum4: "سورة البقرة آية ٢١: ٱللَّهُ عَلِيمٌۭ بِمَا تَعْمَلُونَ",
    },
    {
      id: 31,
      name: "ٱلۡقَابِضُ",
      engName: "AL-QAABIDH",
      pronunciation: "al-qabidh",
      meaning: "The Withholder",
      definition:
        "AL-QAABIDH is the One who withholds and restricts what He wills and is the One who withdraws or contracts the provisions of His creation.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة الفجر آية ١٠: ٱللَّهُ قَابِضٌۭ عَلَىٰكُم",
      menNum2: "سورة التوبة آية ٢٢: قَبِضَ",
    },
    {
      id: 32,
      name: "ٱلۡبَاسِطُ",
      engName: "AL-BAASIT",
      pronunciation: "al-baasit",
      meaning: "The Expander",
      definition:
        "AL-BAASIT is the One who spreads and grants abundance, opening up His mercy and blessings to His servants.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة الفتح آية ١: إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا",
      menNum2: "سورة الرحمن آية ٣: فَٱللَّهُ ٱلۡبَاسِطُ",
      menNum3: "سورة النجم آية ٤٥: يَٰحَسَرَةًۭ",
    },
    {
      id: 33,
      name: "ٱلۡمُحۡيِى",
      engName: "AL-MUHYYI",
      pronunciation: "al-muhyi",
      meaning: "The Giver of Life",
      definition:
        "AL-MUHYYI is the One who gives life and revives His creation from death.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة آل عمران آية ٢: وَٱللَّهُ مُحۡيِى ٱلۡمَوۡتِ",
      menNum2: "سورة آل عمران آية ١٨: إِنَّ ٱللَّهَ مُحۡيِى ٱلۡمَوۡتِ",
      menNum3: "سورة النحل آية ٥: ٱللَّهُ مُحۡيِى ٱلۡمَوۡتِ",
      menNum4: "سورة الأنفال آية ١٨: فَٱللَّهُ مُحۡيِى ٱلۡمَوۡتِ",
    },
    {
      id: 34,
      name: "ٱلۡمُمِيتُ",
      engName: "AL-MUMEET",
      pronunciation: "al-mumeet",
      meaning: "The Creator of Death",
      definition:
        "AL-MUMEET is the One who causes death, and He is the One who has power over the life and death of His creation.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة آل عمران آية ١٨: وَٱلۡمُمِيتُ",
      menNum2: "سورة النحل آية ٥: ٱللَّهُ مُحۡيِى ٱلۡمَوۡتِ",
      menNum3: "سورة آل عمران آية ٢: إِنَّ ٱللَّهَ ٱلۡمُمِيتُ",
      menNum4: "سورة الأنفال آية ١٨: فَٱللَّهُ مُمِيتٌۭ",
    },
    {
      id: 35,
      name: "ٱلۡفَسَّارُ",
      engName: "AL-FASSAR",
      pronunciation: "al-fassaar",
      meaning: "The Explainer",
      definition:
        "AL-FASSAR is the One who clarifies and explains His commands and ordinances to His creation.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة التوبة آية ٢٢: فَٱلۡفَسَّارُ",
      menNum2: "سورة السجدة آية ٣: وَفَصَّلَ",
      menNum3: "سورة الفتح آية ٢: فَٱلۡفَسَّارُ",
    },
    {
      id: 36,
      name: "ٱلۡرَّؤُوفُ",
      engName: "AL-RA'OOF",
      pronunciation: "al-ra'oof",
      meaning: "The Most Kind",
      definition:
        "AL-RA'OOF is the One who is extremely kind and merciful to His creation, often extending His kindness to them.",
      mentions: "This name is mentioned in the Quran, such as in:",
      menNum1: "سورة البقرة آية ٣: وَٱللَّهُ رَؤُوفٌۭ",
      menNum2: "سورة النحل آية ١: وَرَأُوفٌۭ",
      menNum3: "سورة يوسف آية ٥: إِنَّ رَبَّكُمْ رَؤُوفٌۭ",
    },
  ];

  return (
    <>
      <Nav pageName="أسماء الحسنی" />

      <div className="container">
        <div className="namesParent">
          {callNames.map((callName) => (
            <AllahName
              key={callName.id}
              name={callName.name}
              engName={callName.engName}
              pronunciation={callName.pronunciation}
              meaning={callName.meaning}
              definition={callName.definition}
              mentions={callName.mentions}
              menNum1={callName.menNum1}
              menNum2={callName.menNum2}
              menNum3={callName.menNum3}
              menNum4={callName.menNum4}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AllahNames;
