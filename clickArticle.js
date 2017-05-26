// clickArticle.js

document.querySelector('.article[data-article-id="128"]').click();
//  ||
document.querySelector('.article-slider').classList.add('state-opened');
/*
> document.querySelector('.article[data-article-id="128"]').classList
(2) ["article", "js-article-wrapper", value: "article js-article-wrapper"]

> document.querySelector('.article[data-article-id="128"]').click()
undefined

> document.querySelector('.article[data-article-id="128"]').classList
(3) ["article", "js-article-wrapper", "js-article-viewed", value: "article js-article-wrapper js-article-viewed"]
*/


// closed
> document.querySelector('.article-slider').classList
(5) ["article-slider", "js-article-slider", "clearfix", "slick-initialized", "slick-slider", value: "article-slider js-article-slider clearfix slick-initialized slick-slider"]

// open
> document.querySelector('.article-slider').classList
(6) ["article-slider", "js-article-slider", "clearfix", "slick-initialized", "slick-slider", "state-opened", value: "article-slider js-article-slider clearfix slick-initialized slick-slider state-opened"]

.state-opened // added
document.querySelector('.article-slider').classList.add('state-opened');
// +++++++++++++++++++++++++++++++++++++
<div class="article-slider js-article-slider clearfix slick-initialized slick-slider state-opened"><button type="button" class="slick-prev slick-arrow" style="display: block;"><span class="nav-left-icon"></span></button><div aria-live="polite" class="slick-list draggable" style="height: 9362px;"><div class="slick-track" role="listbox" style="opacity: 1; width: 5250px; left: -375px;"><div class="article-content js-article-content slick-slide slick-cloned" data-article-id="93" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/n/u/nursery2.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              We Need Fast Growing Trees in Nepal.            </h2>

            <div class="article-text">
              Eight of the nurseries are located in the mountains of Nepal. These areas were hit hard by the Earthquake in 2015. Having been deforested, mudslides and erosion threatened and even harmed villages. While we cannot prevent another earthquake, we can take steps to prevent future mudslides and erosion by planting trees.
<br><br>
Trees like teak will grow up to four feet per year! Even various pine species will grow two to three feet per year -- that’s super fast! 
<br><br>
For reference, slower growing species will grow <span style="" font-style:="" italic;""="">maybe</span> 8 inches a year.
<br><br>
By growing fast vertically, it also means their roots grow large enough to support the trees. This in turn binds the soil tightly and prevents erosion from normal wind and rain, which was stripping the mountains when no trees were there. As the forests grow in size, we can plant entire faces of the mountains and if not prevent, then minimize the chance of mudslides.            </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide slick-current slick-active" data-article-id="128" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide00" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/i/m/impacttoken_1.jpg" alt="" class="article-image">
          
          
          <div class="article-details ">
            <h2 class="article-title">
              Discover Your Impact            </h2>

            <div class="article-text">
                <div class="first">
    <div class="article-text">
      tentree is on a mission to <span style="font-weight: bold;">reforest the world, 10 trees at a time</span>. 
      <br><br>
      In our few years of tree planting, we see better societies, greener futures, and changing consumer attitudes.
      Tree planting restores the environment, maintains ecosystems, and makes our world healthier for all life to live. We've seen how trees literally reshape the landscape and provide homes to animals, while cleaning the air of greenhouse gasses and regulating both the local weather and the global climate.
      <br><br>
      As tentree grows, so too does our impact. 
      As of today, we’ve planted over 12 million trees from 2012 to 2017. Passing 10,000,000 trees wasn’t instant and our quest to reforest the planet will take time - time we hope you’ll join us for and a journey we wish to enable for all of our customers.

      In an acknowledgement of the time this will take, and it’s urgency, we want to better share your impact with you and the world. This new tree registration program is the result of that desire. The tentree team will continuously add content to show you how your trees have grown and what that means for your life and for those living around the trees, wherever in the world they may be.

      The journey before you will reveal many impacts, from stories of the people to changes in weather and more. We hope to share with you the impacts tentree makes around the world when we plant your trees and watch over them. Explore your impact and choose what resonates most with you.
      <br><br>
      When you register your tree codes ( click the link above ) you’ll be able to select your impact and tree type by the benefits and impacts your trees will make and finally, see the location your trees will be ( or have been ) planted.
      <br><br>
      If you'd like to know more about the Impacts and Tree Types, click the `explore now` button below to see an overview.
      <br><br>
      We hope you enjoy this journey and continue to plant with us as we work together to plant 50 million trees and beyond!
      
      Let’s protect our World – together, we can build forests.
      <br><br>
      <span style="padding-right: 10%; float: right;">Keep plantin’,</span>
      <br><br>
      <span style="padding-right: 10%; float: right;">the tentree team</span>
      <br><br>
      <button onclick="revealImpacts()" class="btn-explore" tabindex="0">Explore Now</button>
    </div>  

    <div class="impacts">
      <div class="impact center-vertically">
        <img class="center-vertically left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/e/l/elements-air-large_1.jpg"> 
        <h1 class="air">Air</h1>
        <p class="description-primary right">Trees are the lungs of the planet, They filter pollutants out of the air, purifying it for animals and humans to breathe. A few simple rows of trees makes the difference between a calm, refreshing breeze and a harsh, dry, whipping windstorm.</p>
      </div>

      <div class="impact center-vertically">
        <img class="center-vertically right" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/e/l/elements-land-large_1.jpg"> 
        <h1 class="land">Land</h1>
        <p class="description-primary left">Trees have a major affect on the land they are planted in. This includes improving soil quality, restoring wildlife habitats, and improving communities through forest gardens (which provide food, wood and a source of income). </p>
      </div>

      <div class="impact center-vertically">
        <img class="center-vertically left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/e/l/elements-water-large_1.jpg"> 
        <h1 class="water">Water</h1>
        <p class="description-primary right">Deforestation leads to erosion and the expansion of deserts into tropical lands. Rainy seasons can shorten from 8 months to only 3, while pollution fills the air. Fighting Climate Change counteracts these with a fresh start, and creates something powerful for the land, the animals, and the people.</p>
      </div>
    </div>

    <div class="tree-type">

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-climate-large_1.jpg"> 
        <h1 class="air left">Climate Change</h1>
        <p class="description left">
          The world’s weather patterns have changed and will continue to change through our lifetime. 
          <br><br>
          There may be a political debate as to the cause, but there is no scientific debate. The cause is man made pollution and we need to do something about it!
          <br><br>
          We are the only species on the planet that can act to undo the pollution that causes Climate Change. Although lots of us want to get involved, many people are unsure where to start.
          <br><br>
          By choosing to fight Climate Change with your trees, tentree will plant 10 trees that are leaders in removing pollution from the atmosphere.
          <br><br>
          We will show you how this impacts the climate and how you can take action in your day to day life to have a healthier, balanced impact on the world around you.
        </p>
      </div>

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-airquality-large_1.jpg"> 
        <h1 class="air left">Quality of Air</h1>
        <p class="description left">
          You can taste and smell the difference in the air between a highway at rush hour and a forest. The toxicity of emissions vs. the freshness of the trees - what a difference!
          <br><br>
          These two forms of air quality can be found everywhere around the world. By choosing this impact tentree will plant your 10 trees in a way that reduces pollution in a city or offsets it by absorbing emissions elsewhere.
          <br><br>
          Choose Quality of Air and explore how trees help the world (and those living on it!) breathe easier.
        </p>
      </div>  

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-storms-large_1.jpg"> 
        <h1 class="air left">Storms</h1>
        <p class="description ">
          Wind blows all the time. Normally, it’s a light breeze - refreshing, and calm. However, in recent years there's been an increase in both the intensity and frequency of severe storms and we want to do something about it!
          <br><br>
          Heavy rains, typhoons, and hurricanes are all destructive forces of nature. A single tree cannot stop a hurricane, but a group of trees can reduce some of the damage to the landscape and homes, while providing shelter for animals.
          <br><br>
          Plant your 10 trees for storms and tentree will make sure your trees help an area that is frequently hit by strong weather.
        </p>
      </div> 

    </div>  

    <div class="tree-type">
      <div class="impact">
        <img class="right" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-housing-large_1.jpg"> 
        <h1 class="land right">Housing</h1>
        <p class="description right">
          We all need a home!
          <br><br>
          Much of the global deforestation occurs because humans need a place to live and fuel to survive. It’s done out of necessity without the knowledge of the negative impacts made to the region.
          <br><br>
          When your 10 trees are planted for the purpose of housing, the locals who plant them will allocate 2 of your 10 trees to be harvested in the coming years to build a home or burn to cook food or keep warm.
          <br><br>
          This is the sustainable practice we’ve explored around the world and educated locals on how to live in harmony with the land.
        </p>
      </div>  

      <div class="impact">
        <img class="right" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-wildlifeland-large_1.jpg"> 
        <h1 class="land right">Wildlife</h1>
        <p class="description right">
          Trees are home to more than just leaves! 
          <br><br>
          A healthy forest can be home to birds, bugs, monkeys, and lots more!
          <br><br>
          Explore all the animals that are finding homes in your 10 trees when you plant for Wildlife.
        </p>
      </div>  

      <div class="impact">
        <img class="right" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-food-large_1.jpg"> 
        <h1 class="land right">Food</h1>
        <p class="description ">
          You can’t eat a tree but it can grow you delicious fruits!
          <br><br>
          Locals benefit directly from the trees you plant by eating fruits grown in their own community.
          <br><br>
          Explore the Harmony between humans and trees, where your trees become a valued contributor to the community for decades to come.
        </p>
      </div> 
    </div>  

    <div class="tree-type">
      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-landpreservation-large_1.jpg"> 
        <div class="left">
          <h1 class="water">Land Preservation</h1>
          <p class="description">
            The roots of trees are strong.
            <br><br>
            They are able to support 100’s of pounds of tree weight. They’re the only thing keeping trees standing!
            <br><br>
            Yet, roots and trees do so much more than just help the tree survive.
            <br><br>
            Take a journey to see how roots hold soil together to stop erosion and enrich the soil through fallen leaves which allow other plants to thrive, providing food for wildlife. See some of our amazing success stories of revitalized ecosystems.
            <br><br>
            Preserve the land and explore how a region flourishes because of trees.
          </p>
        </div>  
      </div>  

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-wildlifefish-large_1.jpg"> 
        <h1 class="water left">Wildlife Fish</h1>
        <p class="description left">
          Trees can help out fish, too!
          <br><br>
          By planting trees that grow in muddy shallows, baby fish, crabs, and other aquatic life can hide from predators among the roots as well as the fallen trees.
          <br><br>
          Explore how your 10 trees enable fish to survive and thrive once more.
        </p>
      </div>  

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-rain-large_1.jpg"> 
        <h1 class="water left clear">Rain</h1>
        <p class="description">
          In a healthy ecosystem, rain waters the plants, fills the streams, and is a welcome event. In deforested regions, it erodes the soil, causes floods, and destroys life.
          <br><br>
          Your 10 trees planted for Rain will once again make Rain a welcome event in areas where it is currently destructive.
          <br><br>
          From stopping erosion to raising the water table, we’ll show you how 10 trees at a time make the rain a force for good.
        </p>
      </div> 
    </div> 

  </div>

<style type="text/css">
/*  html {
    background: #FAFAFA;
  }*/
/*  body,html {
    margin: 10;
    padding: 10;
    font-family:  gotham, archer, sans-serif;
  }*/
  .btn-explore {
    width: 100%;
    display: block;
    background: #92c83e !important;
    color: #fff;
    text-transform: lowercase;
    font-size: 30px;
    box-shadow: none;
    transition: all 1s ease;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .article-text {
    display: block;
    background: #FAFAFA;
    font-family:  gotham, archer, sans-serif;
  }
  .air {
    color: #F26C57;
  }
  .land {
    color: #92C83E;
  }
  .water {
    color: #3A61A6;
  }
  }
  h1 {
    font-size: 2em;
  }
  .impact {
    clear: both;
  }
  .impact > img {
      width: 25%;
      padding-top: 35px;
    }
  .impacts {
    /*margin: 10px;*/
    transition: all 4s ease;
    opacity: 0;
    display: block;
    height: 0; /* this is to hide the element before button is clicked */
  }
  .tree-type {
    /*border: 3px solid #8B8985;
    border-radius: 25px;
    margin: 10px;*/
    transition: all 7s ease;
    opacity: 0;
    display: block;
    height: 0;  /* this is to hide the element before button is clicked */
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .center-vertically {
    vertical-align: middle;
    display: inline-block;
    /*height: 100%;*/
  }
  .description-primary {
    width: 60%;
    /*padding-left: 25px;*/
    font-size: 1em;
  }
  .description {
    /*padding-left: 25px;*/
    font-size: 1.5em;
    /*clear: both;*/
    width: 60%;
    font-family:  gotham, archer, sans-serif;
  }
  .visible {
    opacity: 1;
    height: inherit;
  }

</style>

<script>
  function revealImpacts() {
    document.querySelector('.impacts').classList.add('visible');

    document.querySelectorAll('.tree-type').forEach( function(tree){ 
      tree.classList.add('visible');
    });

    document.querySelector('.btn-explore').style.opacity = 0;

  }
</script>           </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="116" data-slick-index="1" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide01" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <iframe class="article-image video-embed" src="https://www.youtube.com/embed/sNlzISu_kGk?showinfo=0" frameborder="0" allowfullscreen=""></iframe>
          
          
          <div class="article-details has-video">
            <h2 class="article-title">
              Discover Your Impact            </h2>

            <div class="article-text">
              tentree is on a mission to <span style="font-weight: bold;">reforest the world, 10 trees at a time</span>. 
<br><br>
We want to better society and build a greener future through tree planting. Trees reshape the landscape and provide homes to animals, while cleaning the air of greenhouse gasses and regulating both the local weather and the global climate.
<br><br>
The journey before you shows the impacts tentree makes around the world. Now, you can explore those impacts and choose what resonates most with you.
<br><br>
You’ll be able to select your tree type by the benefit and impact it makes and finally, see the location your trees will be ( or have been ) planted.
<br><br>
We hope you enjoy this journey and continue to plant with us as we work together to plant 50 million trees and beyond!
<br><br>
Keep plantin’
tentree           </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="97" data-slick-index="2" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide02" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/m/a/madagascarmangrovefish.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              Fish are Great for the Economy and the Ecosystem            </h2>

            <div class="article-text">
              With the return of Mangrove forests, fish have made homes among their roots in Madagascar. This has a great benefit to the coastal villagers who survive on a diet which includes - you guessed it - fish!
<br><br>
Before planting in Madagascar, fishers were having to go further and further out to sea and were finding less and less fish. This is a problem when their only goal was to feed their families and they’d spend full days with nothing to bring home.
<br><br>
Now, they’re able to catch what they need and sometimes a little more to sell. With the extra money from selling the fish, families will buy textbooks and send their children to school.
<br><br>
Don’t worry - having learned how fragile the ecosystems are, the villagers are mindful not to overfish.           </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="101" data-slick-index="3" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide03" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/m/a/madagascarcattleegret.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              Nature Finds a Way            </h2>

            <div class="article-text">
              In a healthy forest, the restoration of native animal species occurs naturally.
<br><br>
Animals return to a region <span style="" font-style:="" italic;""="">if</span> there are corridors connecting the maturing restored forest to remnant regional forest.
<br><br>
Part of the planting plans we have in Madagascar is to do exactly that. Plant a forest and allow it to mature, become healthy and large over a few years. From continued planting, season over season, enough trees are planted to build a corridor to the older forests.
<br><br>
We see the return of animals happening already and are excited to continue planting with this method to not only capture carbon pollution from the air but to restore homes to animals and allow them to thrive rather than face extinction.            </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="85" data-slick-index="4" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide04" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/p/h/photojardins2.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              Acacia Acacia Acacia!           </h2>

            <div class="article-text">
              <span style="" font-weight:="" bold;""="">Around 8 out of 10 trees here are Acacias.</span>
<br><br>
Agroforestry is a primary driver for trees in Senegal. Trees here are generally planted in dense rows, as they are needed in greater numbers to effectively protect the farms and ensure continuous fertility.
<br><br>
Acacias control erosion, rejuvenate soil fertility, and provide fuelwood and fodder. 
<br><br>
That’s a lot of responsibility for one tree.
<br><br>
We plant 3 different types of Acacias in order to maintain a healthy, natural biodiversity. We leave the decision of which kind of tree to plant where up to the farmers who need them. Wouldn’t you want a say on the trees planted in your backyard too?
<br><br>
By planting the trees amongst people’s yards, the soil is revitalized for gardening and farming. Previously, they grew peanuts which took all the nutrients from the soil and left dirt that didn’t grow much. Now, their future is brighter &amp; more promising - thanks to the trees.            </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="100" data-slick-index="5" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide05" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/d/a/dancing_lemur_in_madagascar_3_1024.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              Did You Know...           </h2>

            <div class="article-text">
              Think the Lemur above looks sleepy? Well, it's probably true! Lemurs are nocturnal animals and this Dancing Lemur decided to come out to play while the sun was still up.
<br><br>
The Lemurs in Madagascar are rapidly losing their homes to deforestation. These animals are unique to the island and if their forest disappears, so will they.
<br><br>
For this reason, among others, it’s important to plant trees in Madagascar and reforest the home of the Lemurs. 
            </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="111" data-slick-index="6" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide06" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/d/e/deforestedworknepal.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              A Little Extra Care Can Regrow a Cut Tree           </h2>

            <div class="article-text">
              In Nepal, we’ve begun cultivating useful trees by pruning shrubby regrowth sprouting from tree stumps and roots; a method called Farmer Managed Natural Regeneration ( FMNR ). 
<br><br>
The FMNR method begins with a survey of the existing natural regrowth from an area that was cut down to provide firewood or timber. Since the tree roots and stumps were left, some will grow new sprouts! We select the stumps to prune based on the type of tree. 
<br><br>
Over time, and regularly pruning, using a simple cutting tool on the stump, the bushy stump will turn back into a tree, growing right from the stump of its mother tree. 
<br><br>
This enables locals to sustainably harvest trees, mindful to not only plant new trees but to regrow the trees they cut down for survival. 1 or 2 of every 10 trees are allocated for use by the locals, while the majority of the trees are there to capture carbon from the atmosphere and preserve the land.            </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="91" data-slick-index="7" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide07" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/f/a/fasttree.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              Fast Growing Trees            </h2>

            <div class="article-text">
              How old do you think these trees are?
<br><br> 
They're actually about 3 years old!
<br><br>
In Nepal, there are many reasons for why one type of tree is planted over another. Among the concerns is that the locals need wood to build their homes! For this, the fastest growing trees are best, and they're pretty sturdy too.
<br><br>
While we plant and grow around 34 different species in the nursery, we know that some, like ebony, are slow growing and may take five years to reach two feet in height. Others, like mahogany, will grow two feet per year. At these rates, after just a few short years, some of the mahogany trees can be harvested to build a home. It all depends how tall you want your house to be.
<br><br>
More importantly, since the wood that remains is storage for the absorbed carbon, by cutting down the trees the locals are manually ensuring that carbon will be sequestered for the time their houses exist. The locals will also replace the harvested trees with new saplings, ensuring more carbon is captured over the years.
<br><br>
We all need fuel and lumber to survive and this change of growing trees dedicated to harvest and then replanting them is a building a sustainable practice.           </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="79" data-slick-index="8" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide08" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/d/e/desertedge2_1.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              Feel the freshness of the forest            </h2>

            <div class="article-text">
              When you walk into a forest, you can sense a difference!
<br><br>
Trees clean the air, scrubbing the carbon from the carbon dioxide humans and animals exhale and releasing pure, clean oxygen for us to breathe. It’s a virtuous cycle that’s kept us all alive for millions of years. To survive the next hundred, we’ll need trees just the same.
<br><br>
Though we’ve deforested many regions of the planet, like Senegal where deforestation has lead to the spread of the desert, we found that replanting a forest not only keeps the desert back but it reclaims land for the forest tree by tree.           </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="110" data-slick-index="9" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide09" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/b/i/bird.jpg" alt="" class="article-image">
          
          
          <div class="article-details ">
            <h2 class="article-title">
              North American Birds are in Danger            </h2>

            <div class="article-text">
              Did you know that 314 Species of Birds in North America are threatened by Climate Change?
<br><br>
This means different things for each species - some will have their food supply disrupted. Others will be tricked into migrating at the wrong time when they falsely sense a change in seasons. Others are simply vulnerable when hot days and huge storms come that they’e never seen before.
<br><br>
We need to act today, or these birds will not survive for tomorrow.           </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="105" data-slick-index="10" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide010" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/c/y/cyclonegif.gif" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              Cyclone Enawo           </h2>

            <div class="article-text">
              Cyclones batter Madagascar every year.
<br><br>
A Cyclone is the same as a Hurricane and just this March, the largest Cyclone in 13 years ran across the island with winds up to 145 mph and 1 -12 inches of rain in a day. That's as powerful as Hurricane Katrina!
<br><br>
Though the winds diminish over time, the resultant heavy rain and flooding damaged and endangered all that live on the island, human and animal alike. Our tree projects are okay, but the need to plant even more trees was amplified by the damage made to the deforested regions.
<br><br>
While we expect storms like this to increase in size and frequency, we can prevent them from destroying the island and all life on it by planting trees to prevent erosion and provide shelter for the inhabitants.
<br><br>
Together, we will survive the storms.           </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide" data-article-id="93" data-slick-index="11" aria-hidden="true" tabindex="-1" role="option" aria-describedby="slick-slide011" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/n/u/nursery2.jpg" alt="" class="article-image">
          
                      <div class="article-impacts ">
              <span class="impact-title lowercase">Impact</span>

                              <span class="impact-icon impact">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-impact.svg" alt="Impact">
                </span>
              
                              <span class="impact-icon treetype">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-treetype.svg" alt="Treetype">
                </span>
              
                              <span class="impact-icon location">
                  <img src="http://tentree.sandbox.nort.ca/skin/frontend/default/dresscode/images/discovery/feed-icon-location.svg" alt="Location">
                </span>
                          </div>
          
          <div class="article-details ">
            <h2 class="article-title">
              We Need Fast Growing Trees in Nepal.            </h2>

            <div class="article-text">
              Eight of the nurseries are located in the mountains of Nepal. These areas were hit hard by the Earthquake in 2015. Having been deforested, mudslides and erosion threatened and even harmed villages. While we cannot prevent another earthquake, we can take steps to prevent future mudslides and erosion by planting trees.
<br><br>
Trees like teak will grow up to four feet per year! Even various pine species will grow two to three feet per year -- that’s super fast! 
<br><br>
For reference, slower growing species will grow <span style="" font-style:="" italic;""="">maybe</span> 8 inches a year.
<br><br>
By growing fast vertically, it also means their roots grow large enough to support the trees. This in turn binds the soil tightly and prevents erosion from normal wind and rain, which was stripping the mountains when no trees were there. As the forests grow in size, we can plant entire faces of the mountains and if not prevent, then minimize the chance of mudslides.            </div>
          </div>
        </div>
      </div><div class="article-content js-article-content slick-slide slick-cloned" data-article-id="128" data-slick-index="12" aria-hidden="true" tabindex="-1" style="width: 375px;">
        <div class="container">
          <span title="Close" class="article-close-button ion-close-round js-article-close"></span>

                      <img src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/i/m/impacttoken_1.jpg" alt="" class="article-image">
          
          
          <div class="article-details ">
            <h2 class="article-title">
              Discover Your Impact            </h2>

            <div class="article-text">
                <div class="first">
    <div class="article-text">
      tentree is on a mission to <span style="font-weight: bold;">reforest the world, 10 trees at a time</span>. 
      <br><br>
      In our few years of tree planting, we see better societies, greener futures, and changing consumer attitudes.
      Tree planting restores the environment, maintains ecosystems, and makes our world healthier for all life to live. We've seen how trees literally reshape the landscape and provide homes to animals, while cleaning the air of greenhouse gasses and regulating both the local weather and the global climate.
      <br><br>
      As tentree grows, so too does our impact. 
      As of today, we’ve planted over 12 million trees from 2012 to 2017. Passing 10,000,000 trees wasn’t instant and our quest to reforest the planet will take time - time we hope you’ll join us for and a journey we wish to enable for all of our customers.

      In an acknowledgement of the time this will take, and it’s urgency, we want to better share your impact with you and the world. This new tree registration program is the result of that desire. The tentree team will continuously add content to show you how your trees have grown and what that means for your life and for those living around the trees, wherever in the world they may be.

      The journey before you will reveal many impacts, from stories of the people to changes in weather and more. We hope to share with you the impacts tentree makes around the world when we plant your trees and watch over them. Explore your impact and choose what resonates most with you.
      <br><br>
      When you register your tree codes ( click the link above ) you’ll be able to select your impact and tree type by the benefits and impacts your trees will make and finally, see the location your trees will be ( or have been ) planted.
      <br><br>
      If you'd like to know more about the Impacts and Tree Types, click the `explore now` button below to see an overview.
      <br><br>
      We hope you enjoy this journey and continue to plant with us as we work together to plant 50 million trees and beyond!
      
      Let’s protect our World – together, we can build forests.
      <br><br>
      <span style="padding-right: 10%; float: right;">Keep plantin’,</span>
      <br><br>
      <span style="padding-right: 10%; float: right;">the tentree team</span>
      <br><br>
      <button onclick="revealImpacts()" class="btn-explore" tabindex="-1">Explore Now</button>
    </div>  

    <div class="impacts">
      <div class="impact center-vertically">
        <img class="center-vertically left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/e/l/elements-air-large_1.jpg"> 
        <h1 class="air">Air</h1>
        <p class="description-primary right">Trees are the lungs of the planet, They filter pollutants out of the air, purifying it for animals and humans to breathe. A few simple rows of trees makes the difference between a calm, refreshing breeze and a harsh, dry, whipping windstorm.</p>
      </div>

      <div class="impact center-vertically">
        <img class="center-vertically right" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/e/l/elements-land-large_1.jpg"> 
        <h1 class="land">Land</h1>
        <p class="description-primary left">Trees have a major affect on the land they are planted in. This includes improving soil quality, restoring wildlife habitats, and improving communities through forest gardens (which provide food, wood and a source of income). </p>
      </div>

      <div class="impact center-vertically">
        <img class="center-vertically left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/e/l/elements-water-large_1.jpg"> 
        <h1 class="water">Water</h1>
        <p class="description-primary right">Deforestation leads to erosion and the expansion of deserts into tropical lands. Rainy seasons can shorten from 8 months to only 3, while pollution fills the air. Fighting Climate Change counteracts these with a fresh start, and creates something powerful for the land, the animals, and the people.</p>
      </div>
    </div>

    <div class="tree-type">

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-climate-large_1.jpg"> 
        <h1 class="air left">Climate Change</h1>
        <p class="description left">
          The world’s weather patterns have changed and will continue to change through our lifetime. 
          <br><br>
          There may be a political debate as to the cause, but there is no scientific debate. The cause is man made pollution and we need to do something about it!
          <br><br>
          We are the only species on the planet that can act to undo the pollution that causes Climate Change. Although lots of us want to get involved, many people are unsure where to start.
          <br><br>
          By choosing to fight Climate Change with your trees, tentree will plant 10 trees that are leaders in removing pollution from the atmosphere.
          <br><br>
          We will show you how this impacts the climate and how you can take action in your day to day life to have a healthier, balanced impact on the world around you.
        </p>
      </div>

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-airquality-large_1.jpg"> 
        <h1 class="air left">Quality of Air</h1>
        <p class="description left">
          You can taste and smell the difference in the air between a highway at rush hour and a forest. The toxicity of emissions vs. the freshness of the trees - what a difference!
          <br><br>
          These two forms of air quality can be found everywhere around the world. By choosing this impact tentree will plant your 10 trees in a way that reduces pollution in a city or offsets it by absorbing emissions elsewhere.
          <br><br>
          Choose Quality of Air and explore how trees help the world (and those living on it!) breathe easier.
        </p>
      </div>  

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-storms-large_1.jpg"> 
        <h1 class="air left">Storms</h1>
        <p class="description ">
          Wind blows all the time. Normally, it’s a light breeze - refreshing, and calm. However, in recent years there's been an increase in both the intensity and frequency of severe storms and we want to do something about it!
          <br><br>
          Heavy rains, typhoons, and hurricanes are all destructive forces of nature. A single tree cannot stop a hurricane, but a group of trees can reduce some of the damage to the landscape and homes, while providing shelter for animals.
          <br><br>
          Plant your 10 trees for storms and tentree will make sure your trees help an area that is frequently hit by strong weather.
        </p>
      </div> 

    </div>  

    <div class="tree-type">
      <div class="impact">
        <img class="right" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-housing-large_1.jpg"> 
        <h1 class="land right">Housing</h1>
        <p class="description right">
          We all need a home!
          <br><br>
          Much of the global deforestation occurs because humans need a place to live and fuel to survive. It’s done out of necessity without the knowledge of the negative impacts made to the region.
          <br><br>
          When your 10 trees are planted for the purpose of housing, the locals who plant them will allocate 2 of your 10 trees to be harvested in the coming years to build a home or burn to cook food or keep warm.
          <br><br>
          This is the sustainable practice we’ve explored around the world and educated locals on how to live in harmony with the land.
        </p>
      </div>  

      <div class="impact">
        <img class="right" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-wildlifeland-large_1.jpg"> 
        <h1 class="land right">Wildlife</h1>
        <p class="description right">
          Trees are home to more than just leaves! 
          <br><br>
          A healthy forest can be home to birds, bugs, monkeys, and lots more!
          <br><br>
          Explore all the animals that are finding homes in your 10 trees when you plant for Wildlife.
        </p>
      </div>  

      <div class="impact">
        <img class="right" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-food-large_1.jpg"> 
        <h1 class="land right">Food</h1>
        <p class="description ">
          You can’t eat a tree but it can grow you delicious fruits!
          <br><br>
          Locals benefit directly from the trees you plant by eating fruits grown in their own community.
          <br><br>
          Explore the Harmony between humans and trees, where your trees become a valued contributor to the community for decades to come.
        </p>
      </div> 
    </div>  

    <div class="tree-type">
      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-landpreservation-large_1.jpg"> 
        <div class="left">
          <h1 class="water">Land Preservation</h1>
          <p class="description">
            The roots of trees are strong.
            <br><br>
            They are able to support 100’s of pounds of tree weight. They’re the only thing keeping trees standing!
            <br><br>
            Yet, roots and trees do so much more than just help the tree survive.
            <br><br>
            Take a journey to see how roots hold soil together to stop erosion and enrich the soil through fallen leaves which allow other plants to thrive, providing food for wildlife. See some of our amazing success stories of revitalized ecosystems.
            <br><br>
            Preserve the land and explore how a region flourishes because of trees.
          </p>
        </div>  
      </div>  

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-wildlifefish-large_1.jpg"> 
        <h1 class="water left">Wildlife Fish</h1>
        <p class="description left">
          Trees can help out fish, too!
          <br><br>
          By planting trees that grow in muddy shallows, baby fish, crabs, and other aquatic life can hide from predators among the roots as well as the fallen trees.
          <br><br>
          Explore how your 10 trees enable fish to survive and thrive once more.
        </p>
      </div>  

      <div class="impact">
        <img class="left" src="http://tentree.sandbox.nort.ca/media/discovery/article/banner_image/t/r/tree-types-rain-large_1.jpg"> 
        <h1 class="water left clear">Rain</h1>
        <p class="description">
          In a healthy ecosystem, rain waters the plants, fills the streams, and is a welcome event. In deforested regions, it erodes the soil, causes floods, and destroys life.
          <br><br>
          Your 10 trees planted for Rain will once again make Rain a welcome event in areas where it is currently destructive.
          <br><br>
          From stopping erosion to raising the water table, we’ll show you how 10 trees at a time make the rain a force for good.
        </p>
      </div> 
    </div> 

  </div>

<style type="text/css">
/*  html {
    background: #FAFAFA;
  }*/
/*  body,html {
    margin: 10;
    padding: 10;
    font-family:  gotham, archer, sans-serif;
  }*/
  .btn-explore {
    width: 100%;
    display: block;
    background: #92c83e !important;
    color: #fff;
    text-transform: lowercase;
    font-size: 30px;
    box-shadow: none;
    transition: all 1s ease;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .article-text {
    display: block;
    background: #FAFAFA;
    font-family:  gotham, archer, sans-serif;
  }
  .air {
    color: #F26C57;
  }
  .land {
    color: #92C83E;
  }
  .water {
    color: #3A61A6;
  }
  }
  h1 {
    font-size: 2em;
  }
  .impact {
    clear: both;
  }
  .impact > img {
      width: 25%;
      padding-top: 35px;
    }
  .impacts {
    /*margin: 10px;*/
    transition: all 4s ease;
    opacity: 0;
    display: block;
    height: 0; /* this is to hide the element before button is clicked */
  }
  .tree-type {
    /*border: 3px solid #8B8985;
    border-radius: 25px;
    margin: 10px;*/
    transition: all 7s ease;
    opacity: 0;
    display: block;
    height: 0;  /* this is to hide the element before button is clicked */
  }
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .center-vertically {
    vertical-align: middle;
    display: inline-block;
    /*height: 100%;*/
  }
  .description-primary {
    width: 60%;
    /*padding-left: 25px;*/
    font-size: 1em;
  }
  .description {
    /*padding-left: 25px;*/
    font-size: 1.5em;
    /*clear: both;*/
    width: 60%;
    font-family:  gotham, archer, sans-serif;
  }
  .visible {
    opacity: 1;
    height: inherit;
  }

</style>

<script>
  function revealImpacts() {
    document.querySelector('.impacts').classList.add('visible');

    document.querySelectorAll('.tree-type').forEach( function(tree){ 
      tree.classList.add('visible');
    });

    document.querySelector('.btn-explore').style.opacity = 0;

  }
</script>           </div>
          </div>
        </div>
      </div></div></div><button type="button" class="slick-next slick-arrow" style="display: block;"><span class="nav-right-icon"></span></button></div>