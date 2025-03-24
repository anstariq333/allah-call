import Image from "next/image";
const MarriageArticle = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="shadow-lg rounded-2xl p-6 bg-white">
         <Image
                      src="/wedding.png"
                      alt="wed"
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
        <h1 className="text-3xl font-bold text-center mb-4">
          Introduction To Islamic Sex Education
        </h1>
        <p className="text-gray-700 text-lg">
          I Welcome Everyone to This Course Named Islamic Sex Education. It's My
          Pleasure to Have You All.
        </p>
        <p className="text-gray-700 mt-4">
          Some People Will Say Why Will We Teach This Subject Which Is Regarded
          to Be a Taboo Talking About It?
        </p>
        <p className="text-gray-700 mt-4">
          I Will Want Them to Know That Islam does not neglect one of the most
          private moments in an individual's life, namely, the sexual
          relationship between a husband and wife. Detailed and explicit rulings
          regarding sexual behaviour can be found in the Qur'an, Sunna and
          works of classical scholars.
        </p>
        <h2 className="text-2xl font-semibold mt-6">And My Reason for Creating This Course Are:</h2>
        <ol className="list-decimal list-inside text-gray-700 mt-4 space-y-2">
          <li>
          A healthy sexual relationship is vital in marriage. Scholars today generally agree that one of the primary reasons for failed marriages is failed sexual lives. The root cause of marital discord is often sexual dissatisfaction, with problems in the bedroom often leading to unhappiness, frustration, and, at times, Even Divorce.

          </li>
          <li>
          The topic has been institutionalized in the school curriculum under the banner of "sex education", where children are taught what some may consider shameful and sordid acts. Furthermore, the increasing pervasiveness of sexual imagery is affecting Muslims, with growing numbers becoming addicted to pornography and other unlawful means of sexual gratification.  
          In this environment, it is crucial to present the Islamic stance on this subject, otherwise, Muslims will be left to learn about it from un-Islamic resources, damaging their character, spirituality and physical health.  
          Some may consider any discussion on sex to be offensive and a breach of religious propriety (adab) and modesty, unaware that the Messenger of Allah ~ himself explained this subject in considerable detail.

          </li>
          <li>
          The third reason is that many Muslims simply do not know the Islamic laws and etiquette on sexual relations; some are even unaware that sex during menstruation is categorically forbidden. Many desire to live their lives in harmony with Islamic teachings and are motivated to learn but feel too embarrassed to ask a scholar directly.  
          </li>
        </ol>
        <p className="text-gray-700 mt-4">
        For such individuals, this Course will prove to be an invaluable resource,  In sha 'Allah. <br/>
          Finally, some Muslim couples may be engaging in practices that are completely permitted but are under the false impression that they are prohibitively disliked or forbidden. I once came across an individual who believed that kissing his wife's body was unlawful, but he did it nevertheless. Even though he had not sinned, it was detrimental to his spirituality to practice an act he believed to be  
          unlawful, despite it being perfectly lawful. People in this situation must be apprised of what is permitted, preventing them from feeling guilty for engaging in it.

        </p>
        <div className="mt-6 text-gray-600 text-sm">
          <p><strong>Author:</strong> Zakariya Abdul Salaam</p>
          <p><strong>Co-Author:</strong> Engineer Hafiz Harris</p>
        </div>
      </div>
    </div>
  );
};

export default MarriageArticle;
