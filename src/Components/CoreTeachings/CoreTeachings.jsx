import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Navbar/Nav";
import { text } from "@fortawesome/fontawesome-svg-core";

let CardDetails = ({
  tittle,
  subTittle,
  text,
  text2,
  list1,
  list2,
  list3,
  list4,
  closePage,
}) => {
  return (
    <>
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
          <div className="text-center py-3 fw-bold">
            <p style={{ fontSize: "40px" }}>{tittle}</p>
            <p className="fs-3">{subTittle}</p>
          </div>
          <div
            style={{
              // height: "300px",
              boxShadow: "0 0 15px 3px rgba(125, 125, 125, 0.1)",
              fontSize: "24px",
              padding: "15px",
              // textAlign: "justify",
              textAlign: "center",
              margin: "15px 0",
            }}
          >
            <p>{text}</p>
          </div>

          <h3 className="py-3">Translation:</h3>

          <div>
            <p className="fs-5">{text2}</p>
          </div>

          <h3 className="py-3">Benifits:</h3>

          <ul id="corePageUl">
            <li>{list1}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
          </ul>
        </div>
      </section>
    </>
  );
};

let Card = ({ tittle, subTittle, text, text2, list1, list2, list3, list4 }) => {
  const [cardDetailsOpen, SetCardDetailsOpen] = useState(false);
  const handleDetails = () => {
    SetCardDetailsOpen(true);
  };
  const closeDetails = () => {
    SetCardDetailsOpen(false);
  };

  return (
    <>
      <div onClick={handleDetails} className="wikpedia-services">
        <h4>{subTittle}</h4>
        <FontAwesomeIcon style={{ fontSize: "20px" }} icon={faAngleDown} />
      </div>

      {cardDetailsOpen && (
        <CardDetails
          tittle={tittle}
          subTittle={subTittle}
          text={text}
          text2={text2}
          list1={list1}
          list2={list2}
          list3={list3}
          list4={list4}
          closePage={closeDetails}
        />
      )}
    </>
  );
};

let CoreTeachings = () => {
  const callCards = [
    {
      id: 0,
      tittle: "الصلاة",
      subTittle: "Salah",
      text: "إِنَّ ٱلصَّلَوٰةَ كَانَتْ عَلَى ٱلْمُؤْمِنِينَ كِتَٰبًۭا مَّوْقُوتًۭا",
      text2:
        "Indeed, prayer has been decreed upon the believers a decree of specified times.",
      list1:
        "Strengthens Connection with Allah: Salah is a direct way to communicate with Allah and seek His guidance and mercy.",
      list2:
        "Purifies the Soul: It helps cleanse the heart of sins and keeps one spiritually grounded.",
      list3:
        "Instills Discipline: The punctuality of Salah teaches time management and consistency.",
      list4: `Protects from Evil: Regular prayer helps one stay away from immoral acts and sins, as mentioned in (Surah Al-Ankabut, 29:45):
"Indeed, prayer prohibits immorality and wrongdoing."`,
    },

    {
      id: 1,
      tittle: "الصوم",
      subTittle: "Sawm",
      text: "يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ كُتِبَ عَلَيْكُمُ ٱلصِّيَامُ كَمَا كُتِبَ عَلَى ٱلَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
      text2:
        "O you who have believed, decreed upon you is fasting as it was decreed upon those before you that you may become righteous.",
      list1:
        "Increases Taqwa (Piety): Fasting helps Muslims develop a stronger consciousness of Allah.",
      list2:
        "Self-Discipline: It teaches self-control and patience by abstaining from food, drink, and sinful behavior.",
      list3:
        "Spiritual Cleansing: Fasting purifies the soul and helps believers focus on worship and good deeds.",
      list4:
        "Health Benefits: Encourages detoxification and gives the digestive system a rest.",
    },

    {
      id: 2,
      tittle: "الزكاة",
      subTittle: "Zakah",
      text: "خُذْ مِنْ أَمْوَٰلِهِمْ صَدَقَةًۭ تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ ۖ إِنَّ صَلَوٰتَكَ سَكَنٌۭ لَّهُمْ ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ",
      text2:
        "Take, [O Muhammad], from their wealth a charity by which you purify them and cause them increase, and invoke [Allah's blessings] upon them. Indeed, your invocations are reassurance for them. And Allah is Hearing and Knowing.",
      list1:
        "Purifies Wealth and Soul: Zakah cleanses a person's wealth and helps develop humility and generosity.",
      list2:
        "Reduces Poverty: It aids the poor and needy, promoting social welfare and reducing economic disparity.",
      list3:
        "Strengthens Community Bonds: Sharing wealth creates solidarity and empathy within the Muslim community.",
      list4:
        "Brings Barakah (Blessing): Giving Zakah increases blessings in one’s wealth, as Allah promises to multiply what is spent in His cause.",
    },

    {
      id: 3,
      tittle: "حقوق الجار",
      subTittle: "Rights of Neighbors",
      text: "مَا زَالَ جِبْرِيلُ يُوصِينِي بِالْجَارِ حَتَّىٰ ظَنَنْتُ أَنَّهُ سَيُورِّثُهُ.",
      text2:
        "The angel Jibril kept recommending the neighbor to me so much that I thought he would make him inherit.",
      list1:
        "Promotes Compassion and Empathy: Respecting neighbors encourages understanding, kindness, and empathy within the community.",
      list2:
        "Strengthens Social Bonds: Good neighborly relations contribute to a peaceful and supportive environment.",
      list3:
        "Increases Rewards in the Hereafter: Treating neighbors with respect and kindness brings rewards from Allah.",
      list4:
        "Prevents Conflict and Disputes: Respecting the rights of others helps prevent disagreements and maintains harmony.",
    },

    {
      id: 4,
      tittle: " الجهاد في الإسلام",
      subTittle: "Jihad in Islam",
      text: "وَجَاهِدُوا۟ فِى سَبِيلِ ٱللَّهِ بِأَمْوَٰلِكُمْ وَأَنفُسِكُمْ ۚ ذَٰلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
      text2:
        "And fight in the cause of Allah with your wealth and your lives. That is better for you, if you only knew.",
      list1:
        "Strengthens Faith: Jihad, when done for the sake of Allah, strengthens a Muslim’s commitment and faith.",
      list2:
        "Defends the Ummah: Jihad can protect the Muslim community from external threats and oppression.",
      list3:
        "Purifies the Soul: It serves as a means of self-purification and striving for higher virtues, including patience and sacrifice.",
      list4:
        "Earns Great Reward: Engaging in jihad for Allah's sake leads to immense spiritual rewards and closeness to Allah in the Hereafter.",
    },

    {
      id: 5,
      tittle: "",
      subTittle: "Sayyid al-Istighfar",
      text: " ",
      text2: " ",
      list1: " ",
      list2: " ",
      list3: " ",
      list4: ``,
    },

    {
      id: 6,
      tittle: " احترام الوالدين",
      subTittle: "Respect for Parents",
      text: "وَقَضىٰ رَبُّكَ أَلّا تَعبُدوا۟ إِلّا إِيّاهُ وَبِالوالِدَينِ إِحسانًۭا إِمَّا يَبلُغَنَّ عِندَكَ الكِبَرَ أَحَدُهُما أَو كِلاهُما فَلَا تَقُل لَهُما أُفٍّ وَلا تَنهَرهُما وَقُل لَهُما قَولًۭا كَرِيمًۭا",
      text2:
        "And your Lord has decreed that you not worship except Him, and to parents, good treatment. Whether one or both of them reach old age [while] with you, say not to them 'uff,' and do not repel them but speak to them a noble word.",
      list1:
        "Earns Allah's Pleasure: Respecting and serving parents is a way to earn the pleasure of Allah, as it is one of the most emphasized acts in Islam.",
      list2:
        "Strengthens Family Bonds: It fosters a loving and supportive family environment, strengthening the ties between parents and children",
      list3:
        "Ensures Blessings in Life: Respecting parents brings blessings and barakah (blessings) to a person's life, including in wealth, health, and happiness.",
      list4:
        "Leads to Paradise: In numerous hadiths, the Prophet (PBUH) mentioned that honoring parents is a pathway to Jannah (paradise).",
    },

    {
      id: 7,
      tittle: "الدخل الحلال",
      subTittle: "Halal Income",
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا۟ لَا تَأْكُلُوا۟ أَمْوَٰلَكُمْ بَيْنَكُمْ بِالْبَاطِلِ وَتُدْلُوا۟ بِهَآ إِلَىٰ ٱلْحُكَّامِ لِتَأْكُلُوا۟ فَرِيقًۭا مِّنْ أَمْوَٰلِ النَّاسِ بِالْإِثْمِ وَأَنتُمْ تَعْلَمُونَ",
      text2:
        "O you who have believed, do not consume one another's wealth unjustly or send it [in bribery] to the rulers in order that [they might aid] you [to] consume a portion of the wealth of the people in sin, while you know [it is unlawful].",
      list1:
        "Purity of Wealth: Halal income ensures that one's wealth is earned through lawful means and is free from sin.",
      list2:
        "Blessings in Wealth: Halal earnings bring barakah (blessings) into a person's life, including increased prosperity and contentment.",
      list3:
        "Protection from Punishment: Earning halal income keeps a person safe from Allah's punishment and provides a source of lawful sustenance.",
      list4:
        "Facilitates Good Deeds: With halal income, a person is better able to spend in the way of Allah, such as giving Zakah, supporting family, and helping the needy.",
    },

    {
      id: 8,
      tittle: "الغِيبة وَالنَّمِيمَة",
      subTittle: "Backbiting and Slander",
      text: "وَلَا يَغْتَبْ بَعْضُكُمْ بَعْضًۭا ۚ أَيُحِبُّ أَحَدُكُمْ أَن يَأْكُلَ لَحْمَ أَخِيهِ مَيْتًۭا فَكَرِهْتُمُوهُ ۚ وَاتَّقُوا۟ ٱللَّهَ ۚ إِنَّ ٱللَّهَ تَوَّابٌۭ رَّحِيمٌ",
      text2:
        "And do not backbite each other. Would one of you like to eat the flesh of his dead brother? You would detest it. And fear Allah. Indeed, Allah is Accepting of repentance and Merciful.",
      list1:
        "Violates the Honor of Others: Backbiting and slander harm the reputation and dignity of others, which is forbidden in Islam.",
      list2:
        "Leads to Punishment: Those who engage in backbiting or slander risk punishment from Allah on the Day of Judgment.",
      list3:
        "Destroys Social Harmony: It causes division, mistrust, and conflict within the community, breaking social bonds.",
      list4:
        "Hinders Spiritual Growth: Engaging in such behavior prevents a person from achieving true piety and closeness to Allah.",
    },

    {
      id: 9,
      tittle: "العلم في الإسلام",
      subTittle: "Knowledge in Islam",
      text: "يَرْفَعِ ٱللَّهُ ٱلَّذِينَ ءَامَنُوا۟ مِنكُمْ وَٱلَّذِينَ أُوتُوا۟ ٱلْعِلْمَ دَرَجَٰتٍ ۗ وَٱللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ",
      text2:
        "Allah will raise those who have believed among you and those who were given knowledge, by degrees. And Allah is acquainted with what you do.",
      list1:
        "Increases Faith: Acquiring knowledge deepens understanding of Islam and strengthens one’s faith and connection to Allah.",
      list2:
        "Leads to Good Deeds: Knowledge empowers individuals to act in accordance with Islamic teachings, promoting righteousness and good actions.",
      list3:
        "Elevates Status in the Hereafter: Those who seek beneficial knowledge are highly regarded in the sight of Allah and rewarded in the Hereafter.",
      list4:
        "Promotes Social and Economic Development: Knowledge enables individuals to contribute positively to society, improve their personal lives, and advance their communities.",
    },

    {
      id: 10,
      tittle: "الصلاة الجماعية",
      subTittle: "Congregational Prayer",
      text: "صَلاةُ الرَّجُلِ فِي جَمَاعَةٍ تَفْضُلُ عَلَىٰ صَلاتِهِ فِي بَيْتِهِ وَصَلاتِهِ فِي سُوقِهِ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً.",
      text2:
        "The prayer of a man in congregation is better than his prayer in his house or in his market by twenty-seven degrees.",
      list1:
        "Increases Reward: Praying in congregation brings a higher reward compared to praying individually.",
      list2:
        "Strengthens Community Bonds: It fosters a sense of unity and brotherhood among Muslims, enhancing social cohesion.",
      list3:
        "Improves Spiritual Discipline: Congregational prayer helps instill regularity, punctuality, and devotion to worship.",
      list4:
        "Provides Support and Encouragement: Praying together encourages others, strengthens faith, and allows for mutual support in the community.",
    },

    {
      id: 11,
      tittle: "الأخلاق النبيلة",
      subTittle: "Noble Ethics",
      text: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
      text2: "And indeed, you are of a great moral character.",
      list1:
        "Fosters Good Relationships: Noble ethics promote kindness, honesty, and respect, leading to stronger relationships in society.",
      list2:
        "Attracts Allah's Pleasure: A person with good character earns Allah's love and mercy, which is essential for success in both this life and the Hereafter.",
      list3:
        "Leads to Paradise: The Prophet (PBUH) stated that those with the best character will be the closest to him on the Day of Judgment.",
      list4:
        "Enhances Community Welfare: When individuals adopt noble ethics, it leads to a harmonious and prosperous society, where justice and kindness prevail.",
    },

    {
      id: 12,
      tittle: "الحجاب والحياء",
      subTittle: "Hijab and Modesty",
      text: "...وَقُل لِّلْمُؤْمِنَٰتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ وَيَحْفَظْنَ فُرُوجَهُنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا مَا ظَهَرَ مِنْهَا وَلْيَضْرِبْنَ بِخُمُرِهِنَّ عَلَىٰ جُيُوبِهِنَّ وَلَا يُبْدِينَ زِينَتَهُنَّ إِلَّا لِزَوْجِهِنَّ أَوْ أَبَائِهِنَّ أَوْ آٰبَاءِ زَوْجِهِنَّ",
      text2:
        "And tell the believing women to lower their gaze and guard their private parts and not to display their adornment except that which [ordinarily] appears thereof and to wrap a portion of their headcovers over their chests and not to display their adornment except to their husbands, their fathers, their husbands' fathers...",
      list1:
        "Protects a Woman’s Dignity: Hijab and modesty safeguard a woman’s honor and preserve her privacy in society.",
      list2:
        "Promotes Spiritual and Physical Purity: By adhering to modesty, individuals maintain purity in both body and spirit, aligning with Islamic values.",
      list3:
        "Fosters Respect: Modesty helps ensure that women are respected for their character and not objectified for their appearance.",
      list4:
        "Draws Closer to Allah: Wearing the hijab and observing modesty are acts of obedience to Allah, which bring spiritual rewards and increase one’s closeness to Him.",
    },

    {
      id: 13,
      tittle: "الرفق باليتامى",
      subTittle: "Kindness on Orphans",
      text: "وَيَسْـَٔلُونَكَ عَنِ الْيَتَـٰمَى ۚ قُلْ إِصْلَاحٌ لَّهُمْ خَيْرٌ ۖ وَإِنْ تُخَالِطُوهُمْ فَإِخْوَٰنُكُمْ ۗ وَٱللَّهُ يَعْلَمُ ٱلْمُفْسِدَ مِنَ ٱلْمُصْلِحِ ۚ وَلَوْ شَاءَ ٱللَّهُ لَفَتَنَكُمْ ۗ إِنَّ ٱللَّهَ عَزِيزٌ حَكِيمٌ",
      text2:
        "And they ask you about orphans. Say, 'Improvement for them is best. And if you mix with them, they are your brothers. And Allah knows the corrupter from the reformer. And if Allah had willed, He could have put you in difficulty. Indeed, Allah is Exalted in Might and Wise.",
      list1:
        "Earns Allah’s Favor: Showing kindness to orphans brings the pleasure of Allah and rewards in the Hereafter.",
      list2:
        "Promotes Social Justice: Helping orphans ensures that they are cared for and treated equally, fostering a fair and compassionate society.",
      list3:
        "Fulfills an Islamic Duty: Caring for orphans is an act of compassion that is highly emphasized in the Qur'an and Hadith.",
      list4:
        "Leads to Paradise: The Prophet Muhammad (PBUH) mentioned that caring for orphans will be a means to enter Paradise, making it a key practice for Muslims.",
    },

    {
      id: 14,
      tittle: "أهمية الوقت",
      subTittle: "Importance of Time",
      text: "وَالْعَصْرِ إِنَّ الإِنسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
      text2:
        "By time, indeed, mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
      list1:
        "Maximizes Productivity: Proper use of time allows individuals to perform good deeds, fulfill obligations, and seek knowledge.",
      list2:
        "Achieves Balance: Islam encourages balancing work, worship, family, and personal time, helping maintain a healthy and organized life.",
      list3:
        "Prevents Regret: Time is a precious gift from Allah, and wasting it leads to regret, especially on the Day of Judgment.",
      list4:
        "Draws Closer to Allah: By using time wisely, one can increase their acts of worship, prayer, and good deeds, thus drawing closer to Allah.",
    },

    {
      id: 15,
      tittle: "الحلال والحرام في التجارة",
      subTittle: "Halal and Haram in Trade",
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا۟ لَا تَأْكُلُوا۟ أَمْوَٰلَكُمْ بَيْنَكُمْ بِالْبَاطِلِ وَلَا تَسْتَعْمِلُوا۟هَا فِي سُبُلِ الْفِسْقِ وَمَن يَفْعَلْ ذَٰلِكَ فَأُو۟لَـٰٓئِكَ هُمُ ٱلْظَّـٰلِمُونَ",
      text2:
        "O you who have believed, do not consume one another's wealth unjustly or send it [in bribery] to the rulers in order to consume a portion of the wealth of the people in wrongdoing, while you know [it is unlawful].",
      list1:
        "Avoiding Interest (Riba): Any transaction involving interest is considered haram (forbidden). Trade must be free of riba to be halal.",
      list2:
        "Honesty and Integrity: Trade should be conducted with honesty, transparency, and fairness, avoiding deceitful practices like fraud and false advertising.",
      list3:
        "Permissible Goods: Only goods and services that are halal (permissible) can be traded. For example, selling alcohol or pork is prohibited.",
      list4:
        "Avoiding Exploitation: Traders must not exploit others through unfair pricing, manipulation, or coercion, ensuring that both parties are treated justly.",
    },

    {
      id: 16,
      tittle: "تجنب الربا",
      subTittle: "Avoiding Usury",
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا۟ لَا تَأْكُلُوا۟ ٱلرِّبَآ أَضْعَافًا مُّدْعَفَةًۭ وَٱتَّقُوا۟ ٱللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
      text2:
        "O you who have believed, do not consume usury, doubled and multiplied, but fear Allah that you may be successful.",
      list1:
        "Protects Financial Justice: Usury exploits the poor and vulnerable, while avoiding it ensures fairness and justice in economic transactions.",
      list2:
        "Increases Barakah (Blessing): Transactions without usury are blessed by Allah, leading to sustainable financial growth and prosperity.",
      list3:
        "Preserves Social Harmony: By prohibiting usury, Islam prevents conflicts and inequalities that arise from unfair financial practices.",
      list4:
        "Fosters Trust in the Economy: Avoiding usury promotes a just financial system based on mutual trust and cooperation, benefiting society as a whole.",
    },

    {
      id: 17,
      tittle: "الحيوانات في الإسلام",
      subTittle: "Animals in Islam",
      text: "وَإِنَّ لَكُمْ فِي ٱلْأَنْعَـٰمِ لَعِبْرَةًۭ نُّسْقِيكُم مِّمَّا فِى بُطُونِهَا وَفِىهِا مَنَٰفِعُ لَكُمْ وَعَلَيْهَا وَفِى ٱلْبَحْرِ تَأْكُلُونَ",
      text2:
        "And indeed, in the livestock there is a lesson for you. We give you to drink from what is in their bellies, and for you in them are many benefits, and of them you eat.",
      list1:
        "Mercy and Compassion: Islam encourages treating animals with kindness, mercy, and respect, prohibiting cruelty or unnecessary harm.",
      list2:
        "Animals as a Blessing: Animals provide sustenance, labor, and companionship, which are considered blessings from Allah.",
      list3:
        "Rights of Animals: Islam grants animals rights, including proper feeding, shelter, and care, and forbids any form of abuse.",
      list4:
        "Accountability on the Day of Judgment: The Prophet Muhammad (PBUH) taught that even the way animals are treated will be questioned on the Day of Judgment.",
    },

    {
      id: 18,
      tittle: "مفاتيح السعادة",
      subTittle: "Keys to Happiness",
      text: "مَنْ عَمِلَ صَـٰلِحًۭا مِّن ذَكَرٍ أَوْ أُنثَىٰ وَهُوَ مُؤْمِنٌۭ فَلَنُحْيِيَنَّهُۥ حَيَاةًۭ طَيِّبَةًۭ ۖ وَلَنَجْزِيَنَّهُمْ أَجْرَهُمْ بِأَحْسَنِ مَا كَانُوا۟ يَعْمَلُونَ",
      text2:
        "Whoever does righteous deeds, whether male or female, while he is a believer – We will surely cause him to live a good life. And We will surely give them their reward according to the best of what they used to do.",
      list1:
        "Faith in Allah (Iman): Believing in Allah and following His guidance brings inner peace and contentment.",
      list2:
        "Gratitude (Shukr): Being grateful for Allah's blessings leads to a positive outlook on life and lasting happiness.",
      list3:
        "Righteous Deeds: Engaging in good deeds and helping others brings fulfillment and strengthens the bond with Allah.",
      list4:
        "Patience (Sabr): Practicing patience in the face of trials and hardships helps maintain peace and happiness in difficult times.",
    },

    {
      id: 19,
      tittle: "العلاقات بين المسلمين وغير المسلمين",
      subTittle: "Relations Between Muslims and Non-Muslims",
      text: "لَا يَنْهَٰكُمُ ٱللَّهُ عَنِ ٱلَّذِينَ لَمْ يُقَاتِلُوكُمْ فِى ٱلدِّينِ وَلَمْ يُخْرِجُوكُمْ مِنْ دِيَارِكُمْ أَنْ تَبَرُّوهُمْ وَتُقْسِطُوا۟ إِلَيْهِمْ ۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُقْسِطِينَ",
      text2:
        "Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes – from being righteous toward them and acting justly toward them. Indeed, Allah loves those who act justly.",
      list1:
        "Peaceful Coexistence: Islam promotes peaceful relationships, advocating for fairness, kindness, and justice in dealings with non-Muslims.",
      list2:
        "Respect and Tolerance: Muslims are encouraged to respect non-Muslims and engage in dialogue while maintaining their own beliefs.",
      list3:
        "Helping Others: Muslims are encouraged to assist those in need, regardless of their faith, as an act of compassion and humanity.",
      list4:
        "Upholding Justice: Muslims are taught to act justly with everyone, including non-Muslims, ensuring fairness and equity in all relationships.",
    },

    {
      id: 20,
      tittle: "مسؤوليات المسلمين تجاه الطبيعة",
      subTittle: "Responsibilities of Muslims Toward Nature",
      text: "إِنَّا جَعَلْنَا فِى ٱلْأَرْضِ جَمِيعًۭا مِّنَ ٱلْمَزَٰرِعِ وَفِى سَمَاءٍۢ مِّنَ ٱلْرِّيَـٰحِ لَعَـٰلِكُمْ تَذَكَّرُونَ",
      text2:
        "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day, and the [great] creatures in which He has scattered through the earth are signs for a people who give thought.",
      list1:
        "Preserving the Environment: Islam encourages the protection of the earth, including conserving water, planting trees, and minimizing waste.",
      list2:
        "Avoiding Pollution: Muslims are urged to avoid harming the environment through actions such as polluting water, air, or land.",
      list3:
        "Respecting Animals: Islam teaches the proper treatment of animals, ensuring they are not mistreated, and encourages using them for beneficial purposes without abuse.",
      list4:
        "Gratitude and Stewardship: Muslims are reminded that nature is a trust from Allah, and they are responsible for maintaining its balance and using its resources wisely.",
    },

    {
      id: 21,
      tittle: "آداب الطعام في الإسلام",
      subTittle: "Etiquettes of Eating in Islam",
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا۟ كُلُوا۟ وَٱشْرَبُوا۟ وَلا تُسْرِفُوا۟ إِنَّهُۥ لَا يُحِبُّ ٱلْمُسْرِفِينَ",
      text2:
        "O you who have believed, eat and drink, but do not be excessive. Indeed, He does not like those who commit excess.",
      list1: `Bismillah Before Eating: Muslims are encouraged to say "Bismillah" (In the name of Allah) before eating to begin their meal with blessings.`,
      list2:
        "Eating with the Right Hand: It is recommended to eat with the right hand, as the left hand is considered impolite for eating.",
      list3:
        "Moderation: Islam teaches moderation in eating, avoiding overeating or wasting food.",
      list4:
        "Sharing Food: Sharing food with others, especially those in need, is highly encouraged in Islam, promoting generosity and compassion.",
    },

    {
      id: 22,
      tittle: "النية الصادقة",
      subTittle: "Sincere Intentions",
      text: "وَمَآ أُمِرُوا۟ا۟ إِلَّا لِيَعْبُدُوا۟ ٱللَّهَ مُخْلِصِينَ لَهُ ٱلدِّينَ حُنَفَآءَ وَيُقِيمُوا۟ ٱلصَّلَوٰةَ وَيُؤْتُوا۟ ٱلزَّكَاةَ ۚ وَذَٰلِكَ دِينُ ٱلْقَيِّمَةِ",
      text2:
        "And they were not commanded except to worship Allah, [being] sincere to Him in religion, inclining to truth, and to establish prayer and give zakah. And that is the correct religion.",
      list1:
        "Pure Worship: Sincere intentions are vital for true worship. Actions should be done solely for the sake of Allah, not for show or worldly gain.",
      list2:
        "Purification of Heart: Sincerity purifies the heart and ensures that all actions align with faith and devotion to Allah.",
      list3:
        "Reward from Allah: Sincere actions, even if small, are rewarded greatly by Allah, as the intention behind them is what counts.",
      list4:
        "Guidance in Life: Sincerity in intentions leads to Allah's guidance and blessings, providing clarity and peace in every aspect of life.",
    },

    {
      id: 23,
      tittle: "آداب المائدة في الإسلام",
      subTittle: "Islamic Table Manners",
      text: "وَكُلُوا۟ وَٱشْرَبُوا۟ وَلا تُسْرِفُوا۟ إِنَّهُۥ لَا يُحِبُّ ٱلْمُسْرِفِينَ",
      text2:
        "O you who have believed, eat and drink, but do not be excessive. Indeed, He does not like those who commit excess.",
      list1: `Saying "Bismillah": Before eating, Muslims are encouraged to say "Bismillah" (In the name of Allah), acknowledging Allah's blessings.`,
      list2:
        "Eating with the Right Hand: Islam teaches that the right hand should be used for eating, as the left hand is generally reserved for other tasks.",
      list3:
        "Eating in Moderation: Islam emphasizes eating in moderation, avoiding excess and wastefulness, and appreciating the blessings of food.",
      list4:
        "Sharing Food: Muslims are encouraged to share their food with others, especially the poor and needy, promoting generosity and compassion.",
    },

    {
      id: 24,
      tittle: "التهجد",
      subTittle: "Tahajjud",
      text: "وَمِنَ ٱللَّيْلِ فَتَهَجَّدْ بِهِۦ نَافِلَةًۭ لَّكَ ۚ عَسَىٰٓ أَن يَبْعَثَكَ رَبُّكَ مَقَامًۭا مَّحْمُودًۭا",
      text2:
        "And during the night, pray with it as additional worship for you; it is expected that your Lord will resurrect you to a praised station.",
      list1:
        "Closeness to Allah: Tahajjud is a means to strengthen the bond between the believer and Allah, as it is an act of worship performed in solitude.",
      list2:
        "Spiritual Elevation: Praying at night brings peace to the heart and increases one's spiritual state, helping the believer feel closer to Allah.",
      list3:
        "Forgiveness of Sins: Tahajjud is a means for forgiveness of sins, as the Prophet Muhammad (PBUH) mentioned that the night prayer is an opportunity for Allah’s mercy.",
      list4:
        "A Means for Answered Prayers: Tahajjud is a time when Allah is particularly receptive to the supplications of His servants, increasing the likelihood of prayers being answered.",
    },

    {
      id: 25,
      tittle: "الصدق",
      subTittle: "Honesty",
      text: "يَا أَيُّهَا الَّذِينَ آمَنُوا۟ ٱتَّقُوا۟ ٱللَّهَ وَقُولُوا۟ قَوْلًۭا سَدِيدًۭا  يُصْلِحْ لَكُمْ أَعْمَٰلَكُمْ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَمَن يُطِعِ ٱللَّهَ وَرَسُولَهُۥ فَقَدْ فَازَ فَوْزًۭا عَظِيمًۭا",
      text2:
        "O you who have believed, fear Allah and speak words of appropriate justice. He will amend for you your deeds and forgive you your sins. And whoever obeys Allah and His Messenger has certainly attained a great attainment.",
      list1:
        "Integrity in Faith: Honesty strengthens a person's faith and trust in Allah, promoting a sincere and righteous life.",
      list2:
        "Trustworthiness: Being honest builds trust between individuals, whether in personal or community relationships.",
      list3:
        "Protection from Sin: Honesty helps avoid the negative consequences of lying and dishonesty, such as guilt, regret, and divine displeasure.",
      list4:
        "Guidance from Allah: The honest are guided to the truth by Allah and are rewarded for their truthful actions both in this life and the Hereafter.",
    },

    {
      id: 26,
      tittle: "طرق تقوية الإيمان",
      subTittle: "Ways to Strengthen Faith",
      text: "إِنَّمَا ٱلْمُؤْمِنُونَ ٱلَّذِينَۤ إِذَا ذُكِرَ ٱللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَا سُمِعَتْۥٓ ءَايَٰتُهُۥ زَادَتْهُمْ إِيمَٰنًۭا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
      text2:
        "The believers are only those who, when Allah is mentioned, their hearts become fearful, and when His verses are recited to them, it increases them in faith; and upon their Lord they rely.",
      list1:
        "Regular Prayer (Salah): Performing the five daily prayers consistently helps keep the heart connected to Allah and strengthens faith.",
      list2:
        "Reading and Reflecting on the Quran: Engaging with the Quran regularly increases knowledge and deepens the understanding of faith, making the heart more receptive to spiritual growth.",
      list3:
        "Supplication (Dua): Asking Allah for guidance and strength through sincere supplication nurtures a deeper connection to Him.",
      list4:
        "Good Deeds and Charity: Engaging in acts of kindness, helping others, and maintaining good character strengthens the heart and increases spiritual awareness.",
    },

    {
      id: 27,
      tittle: "المسجد الحرام",
      subTittle: "Masjid al-haram",
      text: "إِنَّمَا ٱلۡمُشۡرِكُونَ نَجِسٌۭ فَلَا يَجۡتَرِبُوا۟ ٱلۡمَسْجِدَ ٱلْحَرَامَ بَعْدَ عَامِهِۦۚ وَإِنۡ خِفْتُمْ فَقَوۡمٌۭا أَوْلَٰٓبَةًۭ كِتَٰبَ اللّهِ فَمَآ فِيهِۤۚ فَٱنقَلَبَةًۭ فَيَسْتَمْسِكُوا۟ ",
      text2:
        "Indeed, the polytheists are unclean, so let them not approach Al-Masjid al-Haram after this, and if you fear poverty, Allah will enrich you from His bounty if He wills. Indeed, Allah is Knowing and Wise.",
      list1:
        "Sacred Sanctuary: Masjid al-Haram in Mecca is the holiest site in Islam, and the first place of worship built for mankind, as mentioned in the Quran.",
      list2:
        "Home to the Kaaba: The mosque houses the Kaaba, the most sacred structure in Islam, towards which all Muslims face in prayer (Qibla).",
      list3:
        "Pilgrimage Destination: It is the focal point for millions of Muslims who perform the Hajj pilgrimage annually.",
      list4:
        "Spiritual Significance: Masjid al-Haram is considered the site of the first revelation to Prophet Muhammad (PBUH) and a place of immense spiritual reward for prayer and worship.",
    },

    {
      id: 28,
      tittle: "العدالة الاجتماعية",
      subTittle: "Social Justice",
      text: "إِنَّ ٱللَّهَ يَأْمُرُكُمۡ أَن تُؤَدُّوا۟ ٱلْأَمَٰنَٰتِ إِلَىٰٓ أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ ٱلنَّاسِ أَن تَحْكُمُوا۟ بِالْعَدْلِ ۚ إِنَّ ٱللَّهَ نِعِمَّا يَعِظُكُم بِهِۦٓ إِنَّ ٱللَّهَ كَانَ سَمِيعًۭا بَصِيرًۭا",
      text2:
        "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice. Excellent is that which Allah instructs you. Indeed, Allah is ever Hearing and Seeing.",
      list1:
        "Fairness and Equality: Islam stresses that all individuals are equal in the eyes of Allah, and social justice ensures equal treatment and opportunities for everyone, regardless of their background.",
      list2:
        "Protection of Rights: Social justice in Islam includes the protection of people's rights, ensuring that everyone has access to resources, education, and opportunities for a dignified life.",
      list3:
        "Upholding Trusts: Justice involves fulfilling promises and protecting the rights entrusted to individuals, ensuring no one is wronged.",
      list4:
        "Wealth Distribution: Islam emphasizes the fair distribution of wealth, encouraging charity, zakah, and helping the poor and needy to reduce inequality in society.",
    },

    {
      id: 29,
      tittle: "الصبر والمثابرة",
      subTittle: "Patience and Perseverance",
      text: "وَٱصۡبِرْ وَمَا صَبْرُكَ إِلَّا بِٱللَّهِ وَلَا تَحْزَن عَلَيْهِمْ وَلَا تَكُ فِى ضَيْقٍۢ مِّمَّا يَمْكُرُونَ",
      text2:
        "And be patient, and your patience is not but through Allah. And do not grieve over them and do not be in distress from what they conspire.",
      list1:
        "Strengthening Faith: Patience is a sign of trust in Allah's plan, and it strengthens one's faith and reliance on Him during difficult times.",
      list2:
        "Spiritual Reward: Allah promises immense rewards for those who are patient, including forgiveness and paradise.",
      list3:
        "Inner Peace: Patience helps in achieving mental calm and inner peace, allowing individuals to remain steadfast through trials and hardships.",
      list4:
        "Development of Character: Perseverance in the face of adversity builds resilience and good character, leading to personal growth and improvement.",
    },

    {
      id: 30,
      tittle: "التوكل على الله",
      subTittle: "Truat in Allah",
      text: "وَمَن يَتَوَكَّلْ عَلَىٰ ٱللَّهِ فَهُوَ حَسۡبُهُۥۚ إِنَّ ٱللَّهَ بَٰلِغُ أَمْرِهِۦۚ قَدْ جَعَلَ ٱللَّهُ لِكُلِّ شَىۡءٍۢ قَدَرًۭا",
      text2:
        "And whoever fears Allah... He will make a way for him to get out (from every difficulty). And will provide him from (sources) he never could imagine. And whoever fears Allah... He will make a way for him to get out (from every difficulty). And will provide him from (sources) he never could imagine.",
      list1:
        "Reliance on Divine Wisdom: Trust in Allah allows a person to have peace of mind, knowing that everything happens according to His divine wisdom.",
      list2:
        "Emotional Resilience: With trust in Allah, a person remains steadfast and calm in facing life's challenges, understanding that Allah is always in control.",
      list3:
        "Security in Times of Uncertainty: When you trust in Allah, you are confident that He will guide you through difficulties and provide solutions at the right time.",
      list4:
        "Divine Support and Blessings: Allah promises to support those who trust Him, making ways for them where they see none and granting them peace and success in their endeavors.",
    },

    {
      id: 31,
      tittle: "الواجبات تجاه الزوج",
      subTittle: "Responsibilities Toward Spouse",
      text: "وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ فَإِن كَرِهْتُمُوهُنَّ فَعَسَىٰٓ أَن تَكْرَهُوا۟ شَيۡـًۭٔا وَيَجْعَلَ ٱللَّهُ فِيهِ خَيْرًۭا كَثِيرًۭا",
      text2:
        "And live with them in kindness. For if you dislike them – perhaps you dislike a thing and Allah makes therein much good.",
      list1:
        "Kindness and Respect: It is essential to treat one's spouse with kindness, respect, and compassion, fulfilling emotional and physical needs.",
      list2:
        "Providing Financial Support: The husband is responsible for providing for his wife’s needs, including food, shelter, and clothing, in a manner that is fair and just.",
      list3:
        "Mutual Care and Support: Both spouses are responsible for supporting each other, helping each other grow spiritually, emotionally, and mentally.",
      list4:
        "Maintaining Honesty and Trust: Open and honest communication is vital in a marriage, ensuring trust and transparency between the partners.",
    },

    {
      id: 32,
      tittle: "آداب التحية",
      subTittle: " ",
      text: "إِذَا حُيِّيتُم بِتَحِيَّةٍۢ فَحَيُّوا۟ بِأَحْسَنَ مِّنْهَآ أَوْ رُدُّوهَاۚ إِنَّ ٱللَّهَ كَانَ عَلَىٰ كُلِّ شَىۡءٍۢ حَسِيبًۭا",
      text2:
        "When you are greeted with a greeting, greet with one better than it or return it. Indeed, Allah is over all things accountable.",
      list1: `Using the Greeting of Peace: It is recommended to greet others with "As-Salaamu Alaikum" (Peace be upon you), which is the Islamic greeting.`,
      list2: `Responding to a Greeting: If someone greets you, it is important to respond, and if possible, return a better greeting, such as "Wa Alaikum As-Salaam wa Rahmatullahi wa Barakatuh.`,
      list3:
        "Smiling While Greeting: Smiling when greeting others is encouraged in Islam, as it spreads positivity and good will.",
      list4:
        "Greeting Everyone: It is a good practice to greet everyone, including those you may not know personally, as it fosters community and mutual respect.",
    },

    {
      id: 33,
      tittle: "الحسد والبغضاء",
      subTittle: " ",
      text: "وَلَا تَمْنُوا۟ بِفَضْلِكُمۡ بَعۡضَكُمۡ عَلَىٰ بَعۡضٍۢ ۚ لِلرِّجَالِ نَصِيبٌۭ مِّمَّا اكْتَسَبُوا۟ وَلِلنِّسَآءِ نَصِيبٌۭ مِّمَّا اكْتَسَبْنَ ۖ وَسْئَلُوا۟ ٱللَّهَ مِنۢ فَضْلِهِۦٓ إِنَّ ٱللَّهَ كَانَ بِكُلِّ شَىۡءٍ عَلِيمًۭا",
      text2:
        "And do not wish for that by which Allah has made some of you exceed others. For men is a share of what they have earned, and for women is a share of what they have earned. And ask Allah of His favor. Indeed, Allah is ever, of all things, Knowing.",
      list1:
        "Avoiding Envy: Islam encourages believers to avoid envy, as it harms relationships and leads to negative feelings. Instead, one should be content with what Allah has provided them.",
      list2:
        "Encouraging Gratitude: Muslims are encouraged to be grateful for the blessings they have and to make supplications asking Allah for what is best for them, rather than envying others.",
      list3:
        "Promoting Brotherhood: Islam teaches that believers are brothers and sisters to one another, and thus, hatred or jealousy should have no place in their hearts.",
      list4:
        "Forgiveness and Kindness: Overcoming hatred involves showing forgiveness and kindness to others, allowing peace and love to flourish in one's heart and the community.",
    },

    {
      id: 0,
      tittle: " ",
      subTittle: " ",
      text: " ",
      text2: " ",
      list1: " ",
      list2: " ",
      list3: " ",
      list4: ``,
    },

    {
      id: 0,
      tittle: " ",
      subTittle: " ",
      text: " ",
      text2: " ",
      list1: " ",
      list2: " ",
      list3: " ",
      list4: ``,
    },
  ];

  return (
    <>
      <Nav pageName="Core Teachings" />

      <div className="container">
        <h1 className="fw-bold mt-4">Core Teachings</h1>
        <p>The basics and genrall topics of islam.</p>

        {callCards.map((callCard) => (
          <div key={callCard.id}>
            <Card
              tittle={callCard.tittle}
              subTittle={callCard.subTittle}
              text={callCard.text}
              text2={callCard.text2}
              list1={callCard.list1}
              list2={callCard.list2}
              list3={callCard.list3}
              list4={callCard.list4}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CoreTeachings;
