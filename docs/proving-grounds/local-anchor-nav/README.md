---
navbar: false
pageClass: cdr-doc-proving-ground
---

# Local Anchor Nav Proving Grounds

# Default Component Behavior
<style>
  .cdr-doc-proving-grounds-demo-shell {
    display: flex;
  }

  .cdr-doc-proving-grounds-demo-shell__local-nav {
    flex-shrink: 0;
    position: relative;
    width: 200px;
  }

  .cdr-doc-proving-grounds-demo-content {
    padding-right: 40px;
  }

  .cdr-doc-proving-grounds-demo-content h1 {
    font-size: 48px;
    margin-top: 24px;
    margin-bottom: 8px;
  }

  .cdr-doc-proving-grounds-demo-content h2 {
    font-size: 36px;
    margin-top: 18px;
    margin-bottom: 8px;
  }

  .cdr-doc-proving-grounds-demo-content h3 {
    font-size: 24px;
    margin-top: 12px;
    margin-bottom: 8px;
  }
</style>
<div class="cdr-doc-proving-grounds-demo-shell">
<div class="cdr-doc-proving-grounds-demo-content cdr-doc-proving-grounds-demo-content-1">

# Star Wars

<h2>Episode I: The Phantom Menace</h2>
Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.

Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.

While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....

<h3>Characters</h3>

* Qui-Gon Jinn
* Obi-Wan Kenobi
* Queen Amidala
* Anakin Skywalker
* Jar-Jar Binks

<h2>Episode II: Attack of the Clones</h2>
There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.

This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain peace and order in the galaxy.

Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....

<h3>Characters</h3>

* Jango Fett
* Count Dooku
* Yoda
* Clone Troopers

<h2>Episode III: Revenge of the Sith</h2>
War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.

In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.

As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....

<h3>Characters</h3>

* Emperor Palpatine
* Darth Vader

<h2>Episode IV: A New Hope</h2>
It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.

During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.

Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....

<h2>Episode V: The Empire Strikes Back</h2>
It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.

Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.

The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....

<h2>Episode VI: Return of the Jedi</h2>
Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.

Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.

When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...

<h3>Characters</h3>

* Wicket
* Admiral Ackbar

### Settings
* Tattooine
* Yavin 4
* The Death Star

### Spoilers that aren't really spoilers
* Alderaan gets destroyed
* Jek Porkins dies
* Luke never gets his power converters from Tosche Station

<h2>Episode VII: The Force Awakens</h2>
Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.

With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.

Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke's whereabouts....

<h3>Characters</h3>

* Rey
* Finn
* Poe Dameron
* BB-8

<h2>Episode VIII: The Last Jedi</h2>
The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys the merciless legions to seize military control of the galaxy.

Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.

But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....
<h3>Characters</h3>

* Supreme Leader Snoke
* Rose Tico
* Maz Kanata
* Kylo Ren


</div>
  <div class="cdr-doc-proving-grounds-demo-shell__local-nav">
    <cdr-doc-local-anchor-nav 
      parent-selectors=".cdr-doc-proving-grounds-demo-content-1 h2" 
      child-selectors=".cdr-doc-proving-grounds-demo-content-1 h3"
      :appended-items="[
        {
          text: 'Related Films'
        },
        {
          text: 'Rogue One: A Star Wars Story',
          href: 'https://en.wikipedia.org/wiki/Rogue_One'
        },
        {
          text: 'Solo: A Star Wars Story',
          href: 'https://en.wikipedia.org/wiki/Solo:_A_Star_Wars_Story'
        }
      ]"/>
  </div>
</div>


# With Sticky Positionining Top Offset
<div class="cdr-doc-proving-grounds-demo-shell">
<div class="cdr-doc-proving-grounds-demo-content cdr-doc-proving-grounds-demo-content-2">

<h1>A Big First Section</h1>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?

<h1>Only the h1's get picked up this time</h1>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.


<h1>4 Headers starting with numbers will get a correct ID too</h1>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.

</div>
  <div class="cdr-doc-proving-grounds-demo-shell__local-nav">
    <cdr-doc-local-anchor-nav 
      sticky-top-offset="15"
      parent-selectors=".cdr-doc-proving-grounds-demo-content-2 h1" 
      :child-selectors="false"/>
  </div>
</div>


# Markdown Based Headings
<div class="cdr-doc-proving-grounds-demo-shell">
<div class="cdr-doc-proving-grounds-demo-content cdr-doc-proving-grounds-demo-content-3">

# Works with markdown headings too
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?

## And multiple child heading selectors
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.

### So it's pretty flexible
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore 

#### Really flexible in fact
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.

</div>
  <div class="cdr-doc-proving-grounds-demo-shell__local-nav">
    <cdr-doc-local-anchor-nav 
      sticky-top-offset="15"
      parent-selectors=".cdr-doc-proving-grounds-demo-content-3 h1" 
      child-selectors=".cdr-doc-proving-grounds-demo-content-3 h2, .cdr-doc-proving-grounds-demo-content-3 h3, .cdr-doc-proving-grounds-demo-content-3 h4"/>
  </div>
</div>
<div class="cdr-doc-proving-grounds-demo-shell">
<div class="cdr-doc-proving-grounds-demo-content cdr-doc-proving-grounds-demo-content-4">

## Use when
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, autem delectus, voluptate incidunt voluptatum aut architecto iusto quos expedita, illum nisi ipsum dolorem nihil fugit laudantium dicta amet harum modi?

## Don't use when
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt doloremque cumque ad officiis repudiandae natus, culpa obcaecati, expedita, porro distinctio assumenda explicabo nisi. Molestiae praesentium quo, repudiandae nobis eos voluptatum.

## Visual language
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore minus reprehenderit fugit. Tempora doloribus rem ipsa architecto mollitia.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores labore eligendi quam praesentium qui, consectetur asperiores doloremque pariatur quos cupiditate? Tempore 

## Behavior
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.

## Editorial
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.

## Accessibility
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam dolorem excepturi repellat qui atque unde itaque voluptates velit eaque, ratione pariatur adipisci libero culpa, autem doloremque nulla necessitatibus. Sit, eos.

</div>
  <div class="cdr-doc-proving-grounds-demo-shell__local-nav">
    <cdr-doc-local-anchor-nav 
      sticky-top-offset="15"
      parent-selectors=".cdr-doc-proving-grounds-demo-content-4 h2" 
      child-selectors=".cdr-doc-proving-grounds-demo-content-4 h3"/>
  </div>
</div>
