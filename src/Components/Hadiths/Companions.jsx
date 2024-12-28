import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Hadiths.css";
import Nav from "../Navbar/Nav";

let Sahaba = ({
  tittle,
  list1,
  list2,
  list3,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  closePage,
}) => {
  return (
    <>
      {/* <Nav pageName="Battle of Badr" /> */}

      <section
        style={{ overflowY: "scroll" }}
        className="openPagesFixComponent"
      >
        <div className="itsCloseNav">
          <FontAwesomeIcon
            onClick={closePage}
            className="fs-1"
            style={{ cursor: "pointer" }}
            icon={faArrowLeft}
          />
        </div>

        <div className="container">
          <div className="BattleTittle">{tittle}</div>

          <div className="questionsDiv">
            <hr />
            <p>{list1}</p>
            <p>{list3}</p>
            <p>{list2}</p>
            <hr />
          </div>

          <div id="textDiv" className="fs-5">
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
            <p>{text5}</p>
            <p>{text6}</p>
          </div>
        </div>
      </section>
    </>
  );
};

let Category = ({
  tittle,
  list1,
  list2,
  list3,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
}) => {
  const [sahabaOpen, setSahabaOpen] = useState(false);
  const handleSahaba = () => {
    setSahabaOpen(true);
  };
  const closeSahaba = () => {
    setSahabaOpen(false);
  };

  return (
    <>
      <div
        onClick={handleSahaba}
        className="common-category some-a h-auto text-center d-block"
      >
        <div>
          <h2>{tittle}</h2>
        </div>
      </div>

      {sahabaOpen && (
        <Sahaba
          tittle={tittle}
          list1={list1}
          list2={list2}
          list3={list3}
          text1={text1}
          text2={text2}
          text3={text3}
          text4={text4}
          text5={text5}
          text6={text6}
          closePage={closeSahaba}
        />
      )}
    </>
  );
};

function Companions() {
  const callCategories = [
    {
      id: 0,
      tittle: "Abu Bakr Sediq",
      list1: "Who was Abu Bakr Sediq and what is his significance in Islam?",
      list2:
        "What were some of the major achievements of Abu Bakr Sediq during his Caliphate?",
      list3:
        "How did Abu Bakr Sediq contribute to the preservation of the Quran?",
      text1:
        "Abu Bakr Sediq (RA) was the closest companion of Prophet Muhammad (PBUH) and the first Caliph of Islam. Known for his unwavering faith and loyalty, he was titled 'As-Siddiq' (the truthful). He was the first adult male to accept Islam and supported the Prophet through every hardship, including the migration to Madinah.",
      text2:
        "During his Caliphate, Abu Bakr Sediq united the Muslim community after the passing of the Prophet (PBUH). He played a crucial role in preserving Islam by combating false prophets and rebellions in the Riddah wars.",
      text3:
        "One of his greatest contributions was initiating the compilation of the Quran into a single manuscript. He entrusted Zaid bin Thabit to collect the Quran in written form after the deaths of many memorizers in the Battle of Yamama.",
      text4:
        "Abu Bakr Sediq was known for his humility and simplicity. Despite being a ruler, he lived a modest life and prioritized the needs of the Muslim community.",
      text5:
        "He passed away in 634 CE after a Caliphate of approximately two years. His leadership set the foundation for the growth and unity of the Muslim Ummah.",
      text6:
        "Abu Bakr Sediq is buried beside Prophet Muhammad (PBUH) in Masjid al-Nabawi in Madinah. His legacy continues to inspire Muslims around the world for his unwavering commitment to Islam and justice.",
    },
    {
      id: 1,
      tittle: "Umar ibn Al-Khattab",
      list1:
        "Who was Umar ibn Al-Khattab and what is his significance in Islam?",
      list2:
        "What were the major reforms introduced by Umar ibn Al-Khattab during his Caliphate?",
      list3: "How did Umar ibn Al-Khattab expand the Islamic empire?",
      text1:
        "Umar ibn Al-Khattab (RA) was the second Caliph of Islam and a prominent companion of Prophet Muhammad (PBUH). Known for his strong sense of justice and leadership, he embraced Islam after initially opposing it, and his conversion strengthened the Muslim community.",
      text2:
        "During his Caliphate, Umar introduced major administrative and social reforms, including the establishment of a centralized treasury (Bayt al-Mal), the judiciary system, and organized military departments.",
      text3:
        "Umar expanded the Islamic empire significantly, conquering lands such as Persia, Syria, and Egypt, bringing them under Islamic rule while ensuring the welfare and rights of non-Muslims.",
      text4:
        "He was known for his humility and dedication to justice, often inspecting the conditions of his people in disguise to ensure fairness.",
      text5:
        "Umar ibn Al-Khattab was martyred in 644 CE while leading prayers in Masjid al-Nabawi. His governance is considered a model of justice and administration.",
      text6:
        "He is buried beside Prophet Muhammad (PBUH) and Abu Bakr (RA) in Masjid al-Nabawi. His contributions to Islam are celebrated worldwide.",
    },
    {
      id: 2,
      tittle: "Uthman ibn Affan",
      list1: "Who was Uthman ibn Affan and what is his significance in Islam?",
      list2: "What role did Uthman ibn Affan play in compiling the Quran?",
      list3:
        "What were the major achievements of Uthman ibn Affan during his Caliphate?",
      text1:
        "Uthman ibn Affan (RA) was the third Caliph of Islam and a close companion of Prophet Muhammad (PBUH). He was known for his modesty, generosity, and deep devotion to Islam. Uthman was among the first converts to Islam.",
      text2:
        "He is most famous for standardizing the Quranic text. Uthman compiled the Quran into a single official version and sent copies to different parts of the Islamic empire to preserve its authenticity.",
      text3:
        "During his Caliphate, Uthman expanded the Islamic empire further and strengthened its naval forces. He also undertook major public welfare projects, including the expansion of Masjid al-Haram and Masjid al-Nabawi.",
      text4:
        "Uthman faced opposition during his later years, leading to unrest. Despite this, he remained steadfast in his commitment to unity and peace.",
      text5:
        "Uthman ibn Affan was martyred in 656 CE while reciting the Quran. His leadership and contributions to Islam remain a significant part of its history.",
      text6:
        "He is buried in Jannat al-Baqi cemetery in Madinah. His dedication to Islam and his role in preserving the Quran are his lasting legacies.",
    },
    {
      id: 3,
      tittle: "Ali ibn Abi Talib",
      list1: "Who was Ali ibn Abi Talib and what is his significance in Islam?",
      list2:
        "What role did Ali ibn Abi Talib play in the early battles of Islam?",
      list3: "How did Ali ibn Abi Talib contribute to Islamic governance?",
      text1:
        "Ali ibn Abi Talib (RA) was the cousin and son-in-law of Prophet Muhammad (PBUH) and the fourth Caliph of Islam. Known for his wisdom, bravery, and piety, Ali was among the first to accept Islam.",
      text2:
        "Ali played a vital role in the early battles of Islam, including Badr, Uhud, and Khandaq, showcasing remarkable bravery and loyalty to the Prophet (PBUH).",
      text3:
        "As Caliph, Ali emphasized justice and the welfare of the Muslim Ummah. He faced significant challenges during his rule, including the First Fitna (civil war).",
      text4:
        "Ali's sermons and teachings on justice and governance are preserved in Islamic literature, reflecting his deep understanding of Islam.",
      text5:
        "Ali ibn Abi Talib was martyred in 661 CE while praying in Kufa. His leadership and dedication to Islam are remembered with great reverence.",
      text6:
        "He is buried in Najaf, Iraq, where his shrine is a significant place of visitation for Muslims. Ali's wisdom and contributions continue to inspire Muslims globally.",
    },

    {
      id: 4,
      tittle: "Talha ibn Ubaydullah",
      list1:
        "Who was Talha ibn Ubaydullah and what is his significance in Islam?",
      list2: "What role did Talha ibn Ubaydullah play in the Battle of Uhud?",
      list3: "What are some key virtues of Talha ibn Ubaydullah?",
      text1:
        "Talha ibn Ubaydullah (RA) was a prominent companion of Prophet Muhammad (PBUH) and is one of the ten Sahaba promised Paradise (Ashara Mubashshara). He accepted Islam early and supported the Prophet throughout his life.",
      text2:
        "Talha is particularly remembered for his bravery and dedication during the Battle of Uhud, where he shielded the Prophet (PBUH) from enemy attacks, sustaining numerous wounds in the process.",
      text3:
        "He was a generous and selfless individual, often using his wealth to support the poor and those in need within the Muslim community.",
      text4:
        "Talha ibn Ubaydullah's loyalty and sacrifices for Islam earned him the title of 'The Living Martyr' (Shaheed al-Hayy) by the Prophet (PBUH).",
      text5:
        "He passed away in 656 CE during the Battle of the Camel. His contributions to Islam and his unwavering support of the Prophet remain a vital part of Islamic history.",
      text6:
        "Talha is buried in Basra, Iraq. He is remembered as a symbol of courage and generosity in the history of Islam.",
    },
    {
      id: 5,
      tittle: "Zubair ibn Al-Awwam",
      list1:
        "Who was Zubair ibn Al-Awwam and what is his significance in Islam?",
      list2:
        "How did Zubair ibn Al-Awwam contribute to the early Islamic battles?",
      list3: "What are some notable qualities of Zubair ibn Al-Awwam?",
      text1:
        "Zubair ibn Al-Awwam (RA) was one of the closest companions of Prophet Muhammad (PBUH) and a member of the Ashara Mubashshara. He was the Prophet’s cousin and among the first converts to Islam.",
      text2:
        "Known for his valor and combat skills, Zubair played a crucial role in the early battles of Islam, including Badr and Uhud, where he fought courageously for the Muslim cause.",
      text3:
        "Zubair was deeply committed to justice and truth, characteristics that made him a trusted figure among the Sahaba.",
      text4:
        "He was known for his strong faith and adherence to Islamic principles, even under extreme hardship and persecution during the early days of Islam.",
      text5:
        "Zubair was martyred in 656 CE during the Battle of the Camel. His steadfastness and bravery are celebrated in Islamic history.",
      text6:
        "He is buried in Basra, Iraq. Zubair’s dedication to Islam and his sacrifices remain an inspiration for Muslims.",
    },
    {
      id: 6,
      tittle: "Abdur-Rahman ibn Awf",
      list1:
        "Who was Abdur-Rahman ibn Awf and what is his significance in Islam?",
      list2:
        "How did Abdur-Rahman ibn Awf contribute to the Muslim community financially?",
      list3: "What are some key virtues of Abdur-Rahman ibn Awf?",
      text1:
        "Abdur-Rahman ibn Awf (RA) was one of the wealthiest companions of Prophet Muhammad (PBUH) and a member of the Ashara Mubashshara. He accepted Islam in its early days and migrated to both Abyssinia and Madinah.",
      text2:
        "He was known for his generosity, frequently using his wealth to support the Muslim community, including funding military expeditions and helping the poor.",
      text3:
        "Abdur-Rahman exemplified honesty and humility. Despite his wealth, he lived a simple life and never let material possessions distract him from his faith.",
      text4:
        "He played a significant role in the spread of Islam through his business ethics and was instrumental in uniting the Muhajirun (migrants) and Ansar (helpers) in Madinah.",
      text5:
        "Abdur-Rahman ibn Awf passed away in 652 CE in Madinah. His charitable deeds and loyalty to Islam are widely celebrated.",
      text6:
        "He is buried in Jannat al-Baqi cemetery in Madinah. His life serves as a model of generosity and piety for Muslims.",
    },
    {
      id: 7,
      tittle: "Sa’d ibn Abi Waqqas",
      list1:
        "Who was Sa’d ibn Abi Waqqas and what is his significance in Islam?",
      list2: "What role did Sa’d ibn Abi Waqqas play in the spread of Islam?",
      list3: "What are some notable qualities of Sa’d ibn Abi Waqqas?",
      text1:
        "Sa’d ibn Abi Waqqas (RA) was a maternal uncle of Prophet Muhammad (PBUH) and one of the first people to embrace Islam. He is also among the Ashara Mubashshara.",
      text2:
        "He is renowned for his leadership in the Battle of Qadisiyyah, where the Muslim army defeated the Persian Empire, marking a significant expansion of Islamic territory.",
      text3:
        "Sa’d was known for his excellent archery skills, earning him recognition as one of the finest archers in the Muslim army.",
      text4:
        "He was deeply devoted to Islam and remained steadfast in his faith even when his family opposed him for accepting Islam.",
      text5:
        "Sa’d ibn Abi Waqqas passed away in 674 CE and was buried in Madinah. His leadership and contributions to the spread of Islam are highly regarded.",
      text6:
        "He is buried in Madinah. Sa’d’s courage and loyalty continue to inspire Muslims worldwide.",
    },
    {
      id: 8,
      tittle: "Muadh ibn Jabal",
      list1: "Who was Muadh ibn Jabal and what is his significance in Islam?",
      list2: "What role did Muadh ibn Jabal play in teaching Islam?",
      list3: "What are some key virtues of Muadh ibn Jabal?",
      text1:
        "Muadh ibn Jabal (RA) was a companion of Prophet Muhammad (PBUH) known for his deep knowledge of the Quran and Fiqh (Islamic jurisprudence).",
      text2:
        "The Prophet (PBUH) sent Muadh to Yemen as a teacher and judge, where he helped spread Islam and establish justice.",
      text3:
        "Muadh was described by the Prophet (PBUH) as the most knowledgeable of the Halal (permissible) and Haram (forbidden) among the companions.",
      text4:
        "He was known for his wisdom, eloquence, and dedication to Islamic education, often mentoring others in the faith.",
      text5:
        "Muadh ibn Jabal passed away in 639 CE during the plague of Amwas in Syria. His contributions to Islamic knowledge and governance remain significant.",
      text6:
        "He is buried in Jordan. Muadh’s role as a teacher and scholar of Islam is honored by Muslims worldwide.",
    },

    {
      id: 9,
      tittle: "Bilal ibn Rabah",
      list1: "Who was Bilal ibn Rabah and what is his significance in Islam?",
      list2:
        "What role did Bilal ibn Rabah play as the first Mu’azzin of Islam?",
      list3: "What are some key virtues of Bilal ibn Rabah?",
      text1:
        "Bilal ibn Rabah (RA) was an Ethiopian companion of Prophet Muhammad (PBUH) and among the earliest converts to Islam. He is famously known as the first Mu’azzin (caller to prayer) in Islam.",
      text2:
        "Bilal’s unwavering faith and resilience under severe persecution make him an iconic figure in Islamic history. Despite being tortured for accepting Islam, he never renounced his faith.",
      text3:
        "The Prophet (PBUH) chose Bilal as the Mu’azzin due to his melodious and powerful voice. He delivered the Adhan (call to prayer) with deep devotion and sincerity.",
      text4:
        "Bilal was known for his humility and dedication to serving the Muslim community. He remained close to the Prophet (PBUH) and actively participated in key battles, including Badr and Uhud.",
      text5:
        "After the Prophet’s passing, Bilal stopped calling the Adhan in Madinah out of grief but later gave a memorable Adhan in Jerusalem during Umar ibn Al-Khattab’s rule.",
      text6:
        "Bilal ibn Rabah passed away in 640 CE in Damascus, Syria. His legacy as a symbol of faith, perseverance, and equality remains profound in Islamic history.",
    },
    {
      id: 10,
      tittle: "Khalid ibn Al-Walid",
      list1:
        "Who was Khalid ibn Al-Walid and what is his significance in Islam?",
      list2:
        "What role did Khalid ibn Al-Walid play in the military campaigns of Islam?",
      list3: "What are some key achievements of Khalid ibn Al-Walid?",
      text1:
        "Khalid ibn Al-Walid (RA), also known as 'The Sword of Allah' (Saifullah), was a prominent companion of Prophet Muhammad (PBUH) and a legendary military commander in Islamic history.",
      text2:
        "Khalid accepted Islam after initially opposing it. After his conversion, he became one of the most skilled and trusted generals of the Muslim army.",
      text3:
        "He played a decisive role in major battles, including the Battle of Mu'tah, the conquest of Makkah, and the Battle of Yarmouk, where his strategies led to significant victories for the Muslims.",
      text4:
        "Khalid was known for his courage, leadership, and deep faith. His military tactics are studied and admired even today.",
      text5:
        "He passed away in 642 CE in Homs, Syria. Despite his military success, Khalid lived a modest life, attributing his victories to Allah’s help.",
      text6:
        "Khalid ibn Al-Walid is buried in Homs, Syria. His legacy as a fearless warrior and loyal servant of Islam is celebrated worldwide.",
    },
    {
      id: 11,
      tittle: "Abu Ubaidah ibn Al-Jarrah",
      list1:
        "Who was Abu Ubaidah ibn Al-Jarrah and what is his significance in Islam?",
      list2:
        "What role did Abu Ubaidah ibn Al-Jarrah play in the spread of Islam?",
      list3: "What are some key virtues of Abu Ubaidah ibn Al-Jarrah?",
      text1:
        "Abu Ubaidah ibn Al-Jarrah (RA) was a close companion of Prophet Muhammad (PBUH) and is regarded as one of the ten Sahaba promised Paradise (Ashara Mubashshara). He accepted Islam in its early days.",
      text2:
        "He was appointed as the commander of the Muslim army in several campaigns, including the conquest of Syria and Palestine, where his leadership brought significant victories.",
      text3:
        "Abu Ubaidah was known for his modesty, humility, and strong sense of justice. The Prophet (PBUH) referred to him as the 'Amin' (trustworthy) of the Ummah.",
      text4:
        "He played a pivotal role in uniting and guiding the Muslim community during the early Caliphate, earning immense respect for his integrity and leadership.",
      text5:
        "Abu Ubaidah passed away in 639 CE during the plague of Amwas in Syria. His leadership and unwavering faith continue to inspire Muslims.",
      text6:
        "He is buried in Jordan. Abu Ubaidah’s life exemplifies the qualities of trustworthiness and dedication to Islam.",
    },
  ];

  return (
    <>
      <Nav pageName="Companions" />
      <div className="container">
        <div className="p-2">
          <div className="categories">
            {callCategories.map((callCategory) => (
              <div className="" key={callCategory.id}>
                <Category
                  tittle={callCategory.tittle}
                  list1={callCategory.list1}
                  list2={callCategory.list2}
                  list3={callCategory.list3}
                  text1={callCategory.text1}
                  text2={callCategory.text2}
                  text3={callCategory.text3}
                  text4={callCategory.text4}
                  text5={callCategory.text5}
                  text6={callCategory.text6}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Companions;
