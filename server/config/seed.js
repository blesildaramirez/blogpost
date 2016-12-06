/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Post from '../api/post/post.model';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Post.find({}).remove()
  .then(() => {
    Post.create({
      "contents": [
        {
          "content": "For a large chunk of the English speaking world, 2016 has been a divisive political year.  Between the Brexit vote in the UK and the American presidential race, we have seen very sharp lines drawn between people with opposing opinions.  If you lived in either of these countries, odds are high that you were drawn into a political argument or two.  Given how much these two decisions affect international economics and politics, you probably faced a conversation even if you lived elsewhere."
        },
        {
          "content": "Having grown up in a very conservative state, but now living in a more liberal one, I know people across the entire political spectrum.  I also enjoy debates, so I’ve gotten into some interesting discussions and even out-and-out arguments with various people, including my mother-in-law.  We have conflicting opinions on just about every subject.  We can also both be stubborn at times, each with a passion in believing we individually have the “right” answers.  We’ve discussed issues in person and also on social media platforms."
        },
        {
          "content": "Recently, we took one of our debates onto Facebook, where mutual relatives could see our responses.  We each had our say to each other, and some of our friends also chimed in.  I thought the heat had died down on that discussion when a relative of ours wrote that I had crossed the line and made character attacks on my mother-in-law."
        },
        {
          "content": "This accusation mortified me.  I went back and re-checked all my statements.  While I did throw around the word “moral” a few times and asked her questions based on ethics, I did not see where I had made an outright character assault.  I certainly did not feel I had called her names.  However, the line between opinion and derision isn’t always so clear.  Maybe a few of my lines could be read as insulting.  When I re-read some of her statements, I found areas where I could have chosen to interpret them as character attacks on me (although I did not think that was her intent, and I still do not interpret them that way)."
        },
        {
          "content": "This made me wonder about the purpose of debate at all.  Especially on very contentious issues where each side has strong opinions, you are not likely to change anyone’s mind.  In my near decade of discussions with my mother-in-law, I doubt either of us has made much of a dent on each other’s core moral values.  We have made up our minds given our experiences, and barring some catastrophic event, we are unlikely to be swayed from our viewpoints.  So why risk the potential hurt feelings?"
        },
        {
          "content": "My mother-in-law replied on the thread, mortified herself that she might have insulted me.  She said that she had laid out her opinion, she never meant to hurt anyone, and said thank you for the opportunity to speak. She then promised to bow out of the conversation."
        },
        {
          "content": "This could have been the end of it, but again, I was dissatisfied.  Clearly, we were not going to change each other’s minds, but on the flip side, there is a gift in listening to someone with a dissenting view, even if you vehemently disagree.  In all the times my mother-in-law and I have exchanged heated words over a topic, it has never affected our personal relationship.  We could always end the debate with agreeing to disagree.  I know she is a good person at her core, and I believe that she thinks the same of me."
        },
        {
          "content": "So I returned to the discussion thread and thanked my mother-in-law, not because I agreed with her, but because she was brave enough to have the conversation.  She needed to have her voice heard as much as I needed mine heard."
        },
        {
          "content": "I’ve heard many arguments that defending your opinion means nothing, that presenting an opposing argument with someone who has made up their mind is a waste of time.  I must respectfully disagree.  It’s a sign of mutual respect and trust in being able to say what you believe and knowing your loved ones will listen, even if they never agree.  In the absence of discussions, many negative feelings can fester – anger, resentment, frustration.  In those few relationships in which I feel I cannot fully express my thoughts and feelings, I have certainly felt limited in how far that relationship can form."
        },
        {
          "content": "The fact that my mother-in-law and I can have heated arguments and yet still be comfortable around each other is a strength in our relationship, not a weakness.  It is exactly because we have our exchanges that we are able to at least understand each other, if only on an emotional level.   Only then can we put aside our differences and still focus on what matters most: our family and loving each other."
        }
      ],
      "headline": "The Power of Listening to Your Loved Ones",
      "opening": "“One of the most sincere forms of respect is actually listening to what another has to say.” – Bryant H. McGill",
      "primaryImage": "https://i1.wp.com/www.thechangeblog.com/wp-content/uploads/2016/11/loved-ones.jpg?resize=1080%2C718"
    }, {
      "contents": [
        {
          "content": "At the time, my wife and I had four young children. We were living outside London, and I was commuting into the big city every day to work. Each morning, I would get up while the rest of the family was asleep, and begin my two-hour commute to the office – first a trip on an over-crowded bus, then a journey on a train that was invariably late, and finally an unpleasant half hour packed like a sardine into a tube train."
        },
        {
          "content": "In summer, the tube trip was unbearably hot and stuffy. In winter, the bus stops and train stations were freezing cold and miserable."
        },
        {
          "content": "When I got to the office, I would hang around outside the office waiting for the exact stroke of nine o’clock – I didn’t want to spend a minute more in my cubicle than I had to. I was usually obliged to work late, and by the time I had done my two-hour commute in reverse to get home, my children were in bed and asleep."
        },
        {
          "content": "For a while, I accepted that this was the way life had to be – because the people all around me were doing much the same thing. My friends and neighbors all struggled with jobs they hated, so that they could pay the extortionate mortgage on an over-priced home in the suburbs. Monday to Friday was an endless round of working and commuting. Weekends were for catching up with all the household chores and errands there was no time for during the week."
        },
        {
          "content": "That was the way my life was – until my daughter’s third birthday rolled around. We had bought her a doll’s house as a gift, which she played with all day. That evening, as she put Barbie to bed in the doll’s bedroom, the activity seemed to remind her of a something that was worrying her. She asked me a question that shook me to the core."
        },
        {
          "content": "‘Daddy,’ she said. ‘What house do you sleep in?’"
        },
        {
          "content": "I was stunned. I realized I spent so much time away from home, that my daughter didn’t even recognize me as a member of the household. Every weekday, I was gone when she woke up, and still not there when she went to bed. She only saw me at weekends and during holidays – I was nothing more than an occasional visitor in her life – more like a grandparent than her father."
        },
        {
          "header": "Committing to Change",
          "content": "I resolved then and there that the situation had to change. I had been experimenting with online marketing for a while in the evenings, and was making some useful extra income. I decided that if I was going to be a full-time figure in my family’s life, I had to turn this part-time hobby into a full-time business."
        },
        {
          "content": "It wasn’t easy, for sure. For much of the next year, I worked on my project after work every night. Eventually, the late hours paid off, and by the time my daughter’s fourth birthday came round, I was earning more in my online business than in my day job."
        },
        {
          "content": "So I quit. And I didn’t just quit my job – I quit the country, too. Now that I was earning money online, we were free to live anywhere. So we sold up and traded cold, rainy London for a new home in Australia. We spent some time traveling across this great Southern land, exploring everywhere from Adelaide to Airlie Beach – eventually settling in the beautiful, beachside town of Terrigal in New South Wales."
        },
        {
          "header": "A World Apart",
          "content": "Giving up everything you know and moving to a distant part of the planet is a big deal – much bigger than I had anticipated. For a while we struggled with homesickness, the kids missed their grandparents, and we suffered the culture shock of adapting to our new environment. One day, we arrived home to find that we had been burgled and robbed of all our possessions. That was our lowest point, and we almost packed up the few things we had left and headed back to the UK."
        },
        {
          "content": "But we decided to give Australia another three months, and that proved to be a very good decision. The homesickness wore off as we made new friends and adapted to our new world. Soon, the kids were settled into school, and Australia began to feel like home. On the day we finally became Australian citizens, we were all brimming with pride as the local mayor handed us our citizenship certificates."
        },
        {
          "header": "A New Way of Life",
          "content": "Best of all, though, was the total transformation in our lifestyle. I no longer had to get up when the alarm clock went off at 6.00am, or struggle through the sleet, rain and snow of a two-hour commute. I didn’t have to sit in a claustrophobic office cubicle, watching the clock crawl at a snail’s pace until five o’clock."
        },
        {
          "content": "Instead, I turned a spare room in our beautiful new home into my office. I had a view over the rainforest that backed our property, and could work the hours that suited me. Sometimes I would work in the office and listen to the sound of the parrots and the kookaburras in the trees outside. Other times I would take my laptop and work sitting beside the pool. If it got too hot, I could always jump in the water for a refreshing swim."
        },
        {
          "content": "Most days, I would enjoy a leisurely breakfast with the family, drop the kids off at school, and then start work around nine…or maybe ten. I was the boss now, so it was my decision. I aimed to finish work at four, when the kids got home from school. We would all go for a swim in our pool together, or perhaps go down to the beach for an hour or two of surfing. Then there was time for a family meal together in the evening, followed by some more quality time with the kids."
        },
        {
          "content": "Because there was now plenty of time for chores and errands during the week, we were free to do whatever we liked at weekends. So instead of spending Saturdays and Sundays mending fences, cleaning and gardening, we spent them holding BBQs with friends, jet-skiing on the local waterways, bushwalking…or just enjoying the 31 stunning beaches of the Central Coast (one for every day of the month!)"
        },
        {
          "content": "Another big advantage of changing location was that our money went much further. We were able to sell our UK property at sky-high London prices and buy a house for cash in Australia. Better still, our new lifestyle was much cheaper. In London, the inclement weather meant the cost of entertainment was high – we were obliged to spend a fortune on indoor entertainment such as cinema tickets, theme park admissions, fast-food meals, etc."
        },
        {
          "content": "By comparison, entertainment in Australia was much cheaper – often free. It costs nothing to swim on a beautiful beach, to go exploring in the bush, or to play Marco Polo in your backyard pool."
        },
        {
          "content": "However, all of that pales into insignificance compared to the benefit of spending more time with my family. Now there was no danger that my daughter would wonder where I lived, or that I would miss out on their childhood. I was there for every birthday, every school concert and every significant event in their lives. And that is a priceless gift worth more than a billion-dollar fortune."
        },
        {
          "header": "Change Your Location, Change Your Life",
          "content": "So what about you? Do you need a change in location to transform your life and create the future of your dreams?"
        },
        {
          "content": "If so, there has never been a better time to do it. When we relocated to Australia, running an online business was much harder than it is today. There was no Wi-Fi, no mobile broadband and no smartphones. Websites had to be hand-built in old-fashioned code, and everything was clunky and hard to do."
        },
        {
          "content": "None of that is true anymore. Today’s technology makes it easier than ever to start an online business that can earn you the freedom to live on your own terms. Even if you have no previous technical or marketing experience, you can start a blog and build a million dollar business. If that sounds a little ambitious, check out the stories of these blogging millionaires. These are just regular folks who figured out how to turn a simple blog into financial freedom."
        },
        {
          "content": "So the great news is that you don’t have to tolerate a life that is less than perfect. You can create an online income that allows you to pursue your passions, create your dream lifestyle…and live wherever you want. And simply by changing your location, you can open up a whole new world of possibilities."
        },
        {
          "content": "I certainly have no regrets about making the big move. My children enjoyed an awesome childhood, and I was able to share every moment with them. If your life is not working out exactly as you had hoped, then don’t despair. Because there is a real opportunity to make changes that inspire a whole new life."
        },
        {
          "content": "Start today, and you, too, could be living in paradise by this time next year."
        },
        {
          "content": "See you on the beach!"
        }
      ],
      "headline": "How Changing My Location Transformed My Life",
      "opening": "It was on my daughter’s third birthday that I decided my life just had to change.",
      "primaryImage": "https://i2.wp.com/www.thechangeblog.com/wp-content/uploads/2016/11/changing-location.jpeg?resize=1080%2C701"
    }, {
      "contents": [
        {
          "content": "I hate coffee."
        },
        {
          "content": "I hate beer. I hate alcohol. I especially hate bourbon. I hate talking to new people. I hate working hard. I hate studying. I hate time management. And I hate exercise."
        },
        {
          "content": "At least I used to. Not anymore."
        },
        {
          "content": "As I write this, I’m looking forward to tomorrow’s bourbon tasting, drinking a cup of coffee, and telling a close friend (who I met randomly) about the craft beer I tried last night. I’m preparing to unplug from social media and dive headfirst into today’s work."
        },
        {
          "content": "After work, I get to go to the gym and do my favorite exercise (farmer’s walks), then enjoy a lovely steam room/sauna sesh."
        },
        {
          "header": "Change is an acquired taste",
          "content": "The first time I tried to get serious about exercise, I woke up at 6am (more than an hour early) to do circuit workouts in the basement. I pushed and fought through every workout, drenched in sweat and wondering how the YouTube instructor could look so at ease. I thought to myself “this is just what exercise is like.”"
        },
        {
          "content": "I quit within two weeks."
        },
        {
          "content": "The second time I tried to get serious about exercise (more than a year later), I nearly dropped a barbell on my face. I was bench pressing (because that’s what you do, right?) and had zero control over the bar. Surrounded by grunts, big muscly dudes, and chalk dust, I was too embarrassed to go back to the gym."
        },
        {
          "content": "A couple years later, I deadlifted 455 lbs for the first time."
        },
        {
          "content": "All of those things I used to hate have similar stories. I hated studying: until I learned to take the right notes and really get immersed in a topic. I hated other people: until I learned to enjoy staying up late into the night for no other reason than the company."
        },
        {
          "content": "I hated coffee: until I wanted a power up before an intense writing session or workout. Even then I drank it loaded down with cream, only learning to like it black after more than a year of drinking."
        },
        {
          "content": "I hated beer: until I started drinking it with friends and trying things other than PBR. Even then it would take another year before I started liking IPAs and other crafts."
        },
        {
          "content": "Some of these habits are healthy, some are less healthy. But with each, change did not happen overnight. For most, I didn’t expect change to happen at all."
        },
        {
          "content": "But over time it did, and I learned to enjoy it. I learned that change is an acquired taste."
        },
        {
          "header": "Acquiring a taste for change",
          "content": "A friend of mine once said: “I want to be the kind of person that journals, but I just don’t like journal writing.”"
        },
        {
          "content": "What can you do to change when there’s something you don’t like?"
        },
        {
          "content": "If it’s your first day in the gym, your first cup of coffee, or your first networking event, you don’t need to absolutely love it right away. When people say that exercise makes them feel amazing or nitro stouts are deliciously creamy, they usually didn’t get there on the first day."
        },
        {
          "content": "Chances are, you won’t either."
        },
        {
          "content": "As Virgil Thomson once said, “Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time to figure out whether you like it or not.”"
        },
        {
          "content": "Using exercise as an example, there were a lot of reasons I didn’t want to work out."
        },
        {
          "content": "It was intimidating to be surrounded by super fit people putting up weights I could barely count. It felt like I didn’t belong in the gym because I wasn’t already in crazy good shape."
        },
        {
          "content": "Exercise after work was exhausting. After spending a whole day working, the last thing I wanted to do was go to the gym. I still had to cook, eat, do laundry, clean, and take care of all the day-to-day stuff."
        },
        {
          "content": "All that, and I had no idea what I should be doing. I walked into the gym uncertain and very afraid."
        },
        {
          "content": "For exercise, it took more than three tries to enjoy it. The exact number may be different depending on the activity at hand, but the principle is the same: not everything worth doing will be enjoyable at first."
        },
        {
          "content": "If you can make that mental shift and understand that things won’t necessarily start out easy, you can strategize and find ways to take action."
        },
        {
          "header": "Creating the habit of change",
          "content": "I won’t sit here and say you need to drink bourbon every day until you develop a taste for it."
        },
        {
          "content": "But there are some habits you might want to develop."
        },
        {
          "content": "For me, those included exercise, cooking, and meditation. In each case, setting up simple rules helped me stay consistent and learn to enjoy my new habit."
        },
        {
          "content": "There are numerous books, apps, articles, and speeches on healthy habits. Foodist and Mindless Eating focus on changing eating habits without dieting. Headspace provides gamification and clear guidance for meditation. No Sweat focuses an exercise habit around the right kind of motivation. The Power of Habit teaches the general formation of long-term habits."
        },
        {
          "content": "For all of the information out there on behavioral change, I’ve found two rules that are the most effective.\n1. Start small\n2. Decide in advance"
        },
        {
          "header": "Why start small?",
          "content": "What good will it do to work out for 30, or even 10, minutes? What good is a 2 minutes meditation?"
        },
        {
          "content": "It gets you started. If you meditate for 60 minutes on your first day, you won’t be coming back on day 9. If you spend 4 hours making succulent carnitas quesadillas (with homemade tortillas!), it doesn’t matter how delicious they are."
        },
        {
          "content": "If you work yourself into exhaustion and learn to hate exercise, what’s going to keep you coming back?"
        },
        {
          "content": "The goal of day one is not to change your life. The goal of day one is to make it to day two."
        },
        {
          "header": "What does it mean to decide in advance?",
          "content": "You leave work and are headed home. You could go home, change, then hit the gym. Or you could go home and relax with a cool drink and queue up some Netflix."
        },
        {
          "content": "It’s time to make dinner. You could look up a recipe for 20 minutes, go shopping for 30 minutes, and cook for 40 minutes. Or you could order take out."
        },
        {
          "content": "Deciding in advance means setting up your environment so that you can do things when you need to. It means having your gym clothes with you and having your groceries in the fridge."
        },
        {
          "content": "In the moment you come home from work (or wake up in the morning, or any other moment), there are a million things running through your head. You could be feeling any number of emotions. You could be tired, upset, or hungry. There are a lot of factors that can affect your decision."
        },
        {
          "content": "Instead, make the decision before you need to."
        },
        {
          "content": "Dan Ariely calls these “precommitments” in his book Predictably Irrational. Robert Cialdini calls them “if/when…then” statements in his book Pre-Suasion. SJ Scott talks about a similar idea called Habit Stacking. And I like to call the technique chaining."
        },
        {
          "content": "When will you do your habit? Here are my examples, using Cialdini’s “if, then” structure:\n- If I leave work on a Monday/Wednesday/Friday, I will go to the gym\n- If I am passing Trader Joe’s, I will pick up groceries\n- If I just showered in the morning, I will meditate\n- If I get up to use the bathroom at work, I will refill my cup of water"
        },
        {
          "content": "By setting these rules, you make the decision to take action easier – because you’ve already made it."
        },
        {
          "content": "Change can be worth it, but it is not always easy. Recognize that change is an acquired taste. Then take steps to acquire it."
        },
        {
          "content": "What do you want to change?"
        }
      ],
      "headline": "Change is an Acquired Taste",
      "primaryImage": "https://i0.wp.com/www.thechangeblog.com/wp-content/uploads/2016/11/change-acquired.jpeg?resize=1080%2C720",
      "opening": "“Any change, even a change for the better, is always accompanied by drawbacks and discomforts.” – Arnold Bennett"
    }, {
      "contents": [
        {
          "content": "I’d cast everything into my work life. It was who I was, and how I felt valued. Suddenly, that was thrown into question. Greeting new people at social events became awkward. When they would ask, “what do you do?” I paused, fumbling for an answer. It was easier to avoid these types of gatherings, and retreat into the safety of a small group of old friends. My world, along with my identity, began to shrink."
        },
        {
          "content": "I continued to apply for jobs, but the despair was deepening. Out of the blue one day, I was invited to attend a meeting for a new social justice initiative that was being launched in the neighborhood. At the time, my political activism was mostly passive, just venting from the sidelines. I was reluctant to participate, leaving the task to others. But with only time on my hands, I forced myself out of a cocoon. That one meeting morphed into a study group, which became a coalition that eventually changed a policy benefiting millions of hard-working families. Along the way, I testified at the State Assembly, lobbied Members of Congress, joined the Los Angeles Mayor’s task force, and proudly took part in a bill signing ceremony with the Governor of California. I didn’t get paid a dime for my efforts, but it remains the most impactful accomplishment of my life. With a new buoyancy and a story to tell, I reemerged into a world of purpose."
        },
        {
          "content": "The career wilderness is a lonely place to be. When I struggled to find my way out, I felt despair and shame, both of which can be debilitating. During this gloomy passage, I longed for someone to guide me who understood the experience of aging out of a profession and could shed a light on the journey. More than anything, I needed hope."
        },
        {
          "content": "A light finally arrived one spring afternoon. I was having lunch with a friend at an Italian restaurant near the beach. As my friend casually described a new coaching training he’d just enrolled in, I had an epiphany. In that moment eating pasta primavera, I suddenly knew how to steer my professional life. I’d become a Career Coach guiding people their own mid-life work transitions. That hard-earned revelation would require becoming a student again and going back to school. During my training, I was one of the oldest among my cohorts, and also the very first to complete the necessary hours to receive my accreditation as a Professional Coach. Once finding the path, I was unstoppable."
        },
        {
          "content": "I’m grateful every day to be successful at work again. It took me awhile, but the circuitous route enriched my life in ways I couldn’t have imagined. I learned that a person’s value isn’t about how we get paid. It’s how we give back."
        }
      ],
      "headline": "How Losing a Job at 50 Boosted My Life",
      "opening": "In the film industry where I worked for 20 years, being 50 is not a plus. It’s a business that rewards youth, on screen and behind the scenes. When I lost my job at that age, I anticipated challenges but had no idea how brutal the road ahead would be. I was at a professional high point then, with the respect of my peers and an enviable network to draw on. Yet no one would hire me.",
      "primaryImage": "https://i2.wp.com/www.thechangeblog.com/wp-content/uploads/2016/11/losing-job.jpg?resize=1080%2C720"
    }, {
      "contents": [
        {
          "content": "I’ve really run the gamut of relationships lately. Or perhaps it would be better to say that I’ve run the gauntlet."
        },
        {
          "content": "I’ve had people very publicly and persistently attack me with very nasty and unwarranted comments. I’ve had people completely shut me out of their lives because I refused to have a relationship completely on their terms. I’ve felt betrayed on many occasions. I’ve even had people give generously to me, but with the expectation that I reciprocate, thus putting unnecessary stress and expectations on me."
        },
        {
          "content": "Don’t get me wrong, I’m blessed with many wonderful relationships. But I also have many that I would prefer to do without. Even the bad ones, however, have taught me some important lessons about relationships. Here are my top three lessons learned from unpleasant people."
        },
        {
          "header": "1) You are not responsible for anyone else’s feelings.",
          "content": "I have someone who takes everything I do personally. No matter how innocuous my action or comment, they almost always take it as a personal attack and respond emotionally or with anger. At first, it was incredibly upsetting to me, because I don’t want to be constantly hurting people, even if I’m doing so unintentionally. However, I finally had to learn that how they interpreted my actions was not my responsibility. My job was to be as kind and level-headed as I could. If they chose to take that poorly that simply was not my fault, and I could not blame myself for it."
        },
        {
          "header": "2) Other’s opinions don’t matter nearly as much as you think they do.",
          "content": "Eleanor Roosevelt once famously said that “no one can make you feel inferior without your consent.” This is something I struggled with for a long time. “But they’re being so horrible to me!” I’d argue internally. “They hate me! How can I be ok with that??” The truth is, however, that for every person who dislikes you, there’s another person who thinks the world of you. And I would argue that the reverse is also true – for every person who holds you in high esteem, there will be another who couldn’t care less about you. Eventually, I had to accept that I will never get everyone to like me. I had to learn to like myself, appreciate the people who appreciate me and let everyone else’s comments roll off of me like water on a duck’s back."
        },
        {
          "header": "3) Guilt or obligation is not an appropriate initiator of relationship.",
          "content": "This is a really big one for me. I have a lot of people in my life who are constantly trying to guilt me into a relationship with them because we’re family, we’ve known each other for a long time, etc. As someone who has a very strong sense of loyalty, it’s difficult for me to ignore those pleas. However, the sad fact of the matter is that no matter how close you should be in an ideal world to someone, sometimes it simply isn’t a healthy relationship."
        },
        {
          "content": "Rather than caving to their guilt trips, a far healthier thing is to make your opinions known. Tell them what you will and won’t tolerate, and if they cross your boundary put some space between you and them. As I’ve done this, I’ve experienced the opposing emotions of sadness and relief. Sadness at the loss of what could have been, but mostly giddy relief at the knowledge that such toxic people no longer have full access to me and my emotions."
        },
        {
          "content": "Life is all about how you look at it. What happens to you doesn’t matter so much as how you interpret it. You can let people push you around by manipulating your emotions with their guilt trips and unkind words. Or you can choose to ignore it and keep living your wonderful, amazing life. You won’t be able to stop the actions of others, but you can definitely change how they affect you!"
        }
      ],
      "headline": "3 Things I’ve Learned from Bad Relationships",
      "opening": "“Relationships are worth fighting for. But you can’t be the only one fighting. – Unknown”",
      "primaryImage": "https://i0.wp.com/www.thechangeblog.com/wp-content/uploads/2016/10/bad-relationships.jpeg?resize=1080%2C662"
    }, {
      "contents": [
        {
          "content": "There exist countless varieties of meditation.  Depending on what one seeks, there is probably a meditation for it.  Common goals include stress reduction, cardiac health, subjective well-being (happiness), ecstatic states of consciousness, and spiritual communion/union.  Although these types of meditation are very diverse, one might arbitrarily divide the types of meditation into the concentration types and the open-awareness types.  The concentration types involve focusing on an object, such as the breath, a mantra, or visualization.  The open-awareness types are more of a surrender and opening up to what the universe has to offer."
        },
        {
          "content": "I have a variety of meditations that I draw from depending on the particular needs I have at the time.  For example, if I am feeling disconnected from my heart, I may choose a lovingkindness or metta meditation.  If my mind is incredibly restless, I may choose a guided meditation from the Insight Timer app."
        },
        {
          "content": "However, my go-to meditation is a hybrid of concentration and open.  To bring my mind into focus, I concentrate on my out breaths while counting to ten.  Any extraneous thoughts I label as “thinking” or “fear.”  Once my mind has settled down (if it does at all), I change to simply being mindful of whatever experience comes up, noticing any judgment, grasping, or aversion."
        },
        {
          "content": "Mere intention to be mindful hasn’t been very useful for me.  In order to cultivate ongoing presence, I require a formal, structured, carved-in-stone-calendared practice.  Without this, other priorities tend to invade my sacred space.  For me, early morning time is the easiest to maintain as long as I can keep some discipline about when I go to bed."
        },
        {
          "content": "Why do I go to such lengths for meditation?  I believe that the practice benefits me in a variety of ways."
        },
        {
          "header": "1. Creates an Automatic Internal Program",
          "content": "You know that song that gets stuck in your head?  It got there because it was repeated and you paid attention to it.  Now it just comes up spontaneously, wanted or not.  A formal practice sets up a similar tune in my head that plays on and off all day in the background.  The lyrics are something like “What is my experience now?”  This little program is my best friend, ideally getting triggered by a variety of experiences and keeping me from getting too involved with mental fantasies.  It is something akin to the parrots continuously squawking “Attention” in Aldus Huxley’s book Island."
        },
        {
          "header": "2. Keeps Me From Rehearsing Fantasies",
          "content": "Whenever the mind is not aware of a present experience, it is either rehearsing a memory or rehearsing a fantasy.  Rarely are either of these healthy, but they sure can be seductive.  I just love to think about past hurts, future fears, or future ambitions.  All that just programs me to do even more of it in the future and reduces my current productivity and enjoyment."
        },
        {
          "header": "3. Helps Me Make Memories",
          "content": "If I spend most of my day worrying/reminiscing about the past or catastrophizing/dreaming about the future, then I am NOT paying attention to my present.  Therefore, there is nothing to remember about the current day.  Days will go by, and I will have few memories to show for it.  Compare that to a day full of mindfulness, where I notice the flowers, hear what my friends say, and feel the ups and downs of life.  That is the stuff memories and life is made are made of (not that I want to waste all my time reminiscing)."
        },
        {
          "header": "4. Makes Me a Kinder Person",
          "content": "Meditation helps me stay centered, aware of my love and hate as they arise.  I am incredibly more compassionate and less angry when mindful.  The sooner I can catch an emotion, the less likely I will get involved with a story about it.  This makes me a much better husband and father.  As a mental health counselor, my therapy work is noticeably better when I am centered."
        },
        {
          "header": "5. Lowers My Stress",
          "content": "Stress can be a pretty nasty thing for health.  It causes a cascade of chemical reactions in the body that result in cardiovascular plaque, abdominal fat, compromised immune system, chronic fatigue, and poor sleep.  I really try to avoid chronic stress by using meditation as a daily reset that can reduce my cortisol levels and keep me chill for as long as I remain mindful.  (Note: I try to maintain the mindful state at the end of meditation and carry it into my daily life."
        },
        {
          "header": "6. Helps Me Make Better Decisions",
          "content": "If I am not centered, then decisions I make may be in the service of a dysfunctional mental state.  Accumulated decisions dictate what my life looks like.  The more decisions I make when I am mindful, the better my life situation will inevitably be."
        },
        {
          "header": "7. Keeps Me in Good Company",
          "content": "I find that the more centered I am, the more I attract centered people in my life.  This happens both directly through meditative/spiritual circles and indirectly."
        },
        {
          "content": "I suspect that my main excuse for skipping meditation is universal – there just isn’t enough time.  I have to call baloney on my excuse because I always get out twice what I put in it.  That reminds me of some advice I have heard about meditation: You should meditate at least one hour every single day, except when you are really busy.  On those days, you should meditate for two hours."
        }
      ],
      "headline": "How and Why I Meditate",
      "opening": "“The meditation cushion is a good place to turn when talk therapy and antidepressants aren’t enough.” – Unknown",
      "primaryImage": "https://i1.wp.com/www.thechangeblog.com/wp-content/uploads/2016/10/why-meditate.jpg?resize=1080%2C650"
    }, {
      "contents": [
        {
          "content": "Though I ran in my youth, on my middle school and high school track teams, training for and running my first marathon wholeheartedly changed my life in 2007. Of course, some changes were to be expected – things like my body composition, what types of food began making their way into my daily diet (and what foods no longer appealed to me) – but many of the changes were things that I wouldn’t have expected. Training for, running, and racing marathons has helped make me into a better version of myself."
        },
        {
          "content": "Part of the reason that I gravitate toward running is because of the sport’s simplicity. Sure, you can easily get bogged-down in the equipment and the gear if you’d like to, but really, all you need is a safe place to run, the will to run, and a pair of shoes – the latter being a maybe for some people – and you can get out there and call yourself a runner."
        },
        {
          "content": "As strange as it sounds, I think there’s an inherent beauty to participating in a daily ritual, that happens to be a sport, that our ancestors for all of humanity as we know it have done. While I’ll obviously never have the chance to meet my great-great-great-great-great (you get the picture) relatives, I find it so neat to know that I am doing the same activity that they once did, albeit thousands of years later. In this way, running has both let me live in the present but still acknowledge and remember the past. My sport gives way to deep reflection and introspection, and I’d like to think that it’s in these moments when I’m making my way across the trail or path that I’m connecting with my ancestors."
        },
        {
          "content": "Running is also one of those activities that keeps me coming back for more due to all the different types of feedback I can take from it. I could train to run a race as short as 100-800 meters on a track, as long as 100-plus milers out on some wild and technical trails somewhere, or some distance in between that loops through residential neighborhoods and downtown business districts. Consequently, while the activity that binds all of these races together is the same – running – how I’d approach training for them is drastically different."
        },
        {
          "content": "Therein lies another beautiful thing about this sport: namely, that I can approach the same task virtually hundreds of different ways, receive feedback, and then adjust my plan of attack accordingly."
        },
        {
          "content": "It’s in what can sometimes be the minutia of training for a running event that I learn over and over again how important it is in my own life to be open to approaching tasks and challenges in many different ways. If I don’t, I can’t expect to receive different outcomes. The ability to get different types of feedback is rewarding, no doubt, but what’s arguably more rewarding is the opportunity to learn how to act (or in this case, run and train) to affect my own outcomes. You’d think that this would be obvious – if you want things to turn out differently, then change how you do them in the first place – but it’s so easy to fall into routines, for better or worse, day in and day out. We can’t do the same things all the time and hope for different results."
        },
        {
          "content": "When I say that running has allowed me to become the best version of myself, it insinuates a form of internal competition, which admittedly sounds a little strange. There’s only one version of ourselves, right? I mean, there’s no other person who’s me, so how can there be a competition of me against … me? Training for endurance events has given me multiple opportunities to become a better version of myself because I get to constantly negotiate the tension and struggles of my own dreams and desires, as they relate to my running abilities and performance, against my current reality."
        },
        {
          "content": "For example, I know that in order to achieve X in my running, I need to do Y – as unpleasant or as uncomfortable as it might be (running faster-than-normal paces or running shorter/longer-than-normal distances, for example) – and I know that a lot of the time, my inability to perform is rooted in some deeply-held insecurities I have about my abilities. It takes a lot of work to shut-down the negative self-talk and to toss out what I call the “mental garbage,” but it’s crucial. If I’m not going to be my biggest cheerleader, who will be? If I don’t believe in myself and my ability to put in the work day after day and ultimately achieve my dreams, who will?"
        },
        {
          "content": "I think many of us have the tendency to sell ourselves short for some reason, and continually challenging myself through running helps me surprise myself, time and again, that I’m capable of more than what I give myself credit for. It’s not to say that I’m infallible – I absolutely fail sometimes – but if I don’t give myself the chance to try, there’s no way that I’ll be successful."
        },
        {
          "content": "Sometimes, showing up is the biggest victory."
        },
        {
          "content": "Although training for and racing marathon-distance events (26.2 miles or 42 kilometers) is my preferred type of running, I recognize that it isn’t everyone’s cup of tea. It doesn’t matter. I’d argue that getting into a regular running routine, whether you are formally training for and later, completing an event or not, can still have a transformative effect on your life and how you view yourself. If you’re interested in starting, I’d first recommend the following:"
        },
        {
          "content": "Research where you can run. It can be as simple asheading right outside your front door to run through your neighborhood, or it can involve heading over to a nearby park or trail system or even running on a treadmill indoors; it doesn’t matter. Having options is helpful, and knowing where you are going to run can just help you plan accordingly, in terms of dressing for the elements."
        },
        {
          "content": "Find a buddy. Running is a wonderful solitary activity, but it can also be very fun to do with a friend. Consider encouraging a buddy to come along for the ride – either by running with you or cycling alongside you – and I bet you’ll have more fun than you’d imagine."
        },
        {
          "content": "Hire a coach, if you’d like. Depending on your immediate- and long-term goals, hiring a coach might not be a bad idea, especially if you’re getting started with running. Coaches typically bring with them years of personal experience in the sport as well as many years of helping develop others’ abilities. Plus, they can be a veritable wealth of information when you’re first starting out and can help you remain injury-free, which is critically important."
        },
        {
          "content": "Just try it! Running might be a little awkward or uncomfortable at first, but don’t write it off entirely if you don’t feel like you are an Olympic all-star right from the start. It doesn’t necessarily get easier, per se; instead, you get stronger. Bank on it."
        },
        {
          "content": "Take it one step at a time. Quite literally, running is an incredibly monotonous sport because all you do is put one foot in front of the other, repeatedly, hundreds if not thousands of times, and bound yourself in a generally-forward direction. Don’t get too far ahead of yourself, especially if things don’t come “naturally” to you at first. Comparison is the thief of joy, so don’t worry about how others perceive you or how you are faring against your peers. You do you; love the run you’re in."
        },
        {
          "content": "Precious few other activities exist out there that we can say both we and our great-ancestors have done, but running is one of them. When I began seriously endurance-running training in 2007, I never would have imagined that it would have such a transformational effect on my life."
        },
        {
          "content": "Give it – and yourself – a chance, and enjoy the journey that it takes you on."
        }
      ],
      "headline": "How Running Changed My Life",
      "primaryImage": "https://i1.wp.com/www.thechangeblog.com/wp-content/uploads/2016/09/running-changed-life-1.jpg?resize=1080%2C660",
      "opening": "Most of us, myself included, probably don’t embark on a new hobby and think that it’ll change our lives. When I began training for my first marathon in 2007, it was strictly a bucket-list thing, something that’d surely be “one and done” because who would want to keep training for, and running, such an arduous race? As it turns out: me."
    })
    .then(() => {
      console.log('finished populating posts');
    });
  });
