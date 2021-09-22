Title: Ranger Tug R23 Battery Monitor Install
Date: 2021.09.22
Summary: Installing a Victron BMV-712 battery monitor
MainImage: /img/rangertugr23.jpg
Thumbnail: /img/rangertugr23_thumb.jpg
Tags: boat
Category: boat

After doing the [hinge door modification][hingedoor] last week, this week's boat project was to install a battery monitor so we have a clear idea of how much power we are using (and more importantly: how much we have remaining).

It didnt take much research to discover that the Victron BMV-712 was the monitor of choice for many boat (and RV) owners. It has Bluetooth capability built-in and a companion app so you can see your battery status right on your phone. In order to complete the project, I also purchased a bus bar and two custom-made battery cables.

<p>
<figure><img src="/img/boat/batterymonitor1.jpg" class="largeimg" />
<figcaption>Battery monitor, bus bar, and cables<figcaption>
</figure>
</p>

* [Victron BMV-712 Battery Monitor][monitor] - from Amazon. Includes the monitor, shunt, and all necessary wiring.
* [Blue Sea Systems MaxiBus 250A Bus Bar][busbar] - I actually got this on eBay (new) since they had it in stock and for the best price.
* [Custom battery cables][pacer] - from Pacer Group. They make cables to custom sizes, and I got two 12" 1/0 AWG yellow cables with 3/8" lug ends

> Before doing any electrical work on your boat, you should ensure that the battery switches are off and that your solar panel is covered (I used a blanket) so that no current is flowing in.

There are a few steps to this install. The first is to run the communication wire (looks like a standard telephone cord) from the cave (or whereever you plan to install the monitor) to the battery compartment (in the port side lazarette on my boat). You have to remove the 24/7 fuse panel cover and then unscrew the carpeted cover that runs under all of the electrical components. From there I was able to snake the wire from inside out into the port lazarette.

Next step was to install the shunt. The shunt is the thing that actually measure the current flowing through the system. One side connects to the negative terminal of the house bank, and the other side connects to 'all loads and chargers'. That means **everything** else goes on the other side. If your boat is like mine, it likely came from the factory with a few things wired directly to the negative terminals - those all need to move to the 'load' side of the shunt. And your boat might also have the starter battery negative daisy-chained to the house battery negative - if that is the case, then you need to move the starter negative to the load side as well. The **only** thing on the 'battery' side of the shunt should be the house negative. An easy way to think about it is:

* start at the first house battery - there should be only one cable coming off of the negative terminal, and it should go to the next battery.
* if you have more than two house batteries, then each intermediate battery should be connected to the upstream and downstream battery only
* for the final house battery, there should be only one cable coming off and it should go directly to the 'battery' side of the shunt

In order to move all of the other connections to the 'load' side, I installed the bus bar. That gave me additional posts to move all of the negative connections to. The final wiring looks like this:

    H1<-->H2<-->SHUNT<-->BUS BAR & everything else

<p>
<figure><img src="/img/boat/batterymonitor3.jpg" class="largeimg" />
<figcaption>Bus bar and shunt installed<figcaption>
</figure>
</p>

Then it is just a matter running the small leads to the positive terminal (this monitor also lets you monitor the voltage of a second battery so I wired that to my starter battery) and connecting the communication wire.

Back at the other end, I drilled a hole in the wood panel using a 2 1/8" hole saw and installed the monitor. Be careful to make sure you have space behind the panel and that you dont damage any wires when drilling through.

<p>
<figure><img src="/img/boat/batterymonitor2.jpg" class="largeimg" />
<figcaption>Monitor installed in the cave<figcaption>
</figure>
</p>

The system automatically comes to life, but you do need to configure a few things that are specific to your boat. You can do it via the monitor itself, but it is easier to download the VictronConnect app and do it from your phone. The important things to set are:

<p>
<figure><img src="/img/boat/batterymonitor4.png" class="largeimg" />
</figure>
</p>

* *Battery capacity* - set this to the total amps that your house bank provides. For my boat, I have two 90-amp batteries, so I set this to 180
* *Charged voltage* - this should come preset, but I had to install a firmware update and it reset it to 0 so double check it. For 12-volt systems, 13.2 is a good value
* *Discharge floor* - this is how far down you want to run your batteries. For the stock flooded lead batteries, you dont want to go below 50% of charge, so that is what I set mine to. If you have AGM or Lithium batteries, you can set the value appropriately.
* *Time-to-go averaging period* - this is used to calculate your 'time to go', or in other words, how much time you have left until your batteries reach the discharge floor. The monitor will average electrical usage over time when calculating this value, but for a boat with small electrical loads that dont run frequently, setting it to 0 will cause the monitor to update in real time (no averaging)

Once you do that, you can see all of the perinent information in the app, including a super convenient feature to tell you your 'time to go' value - essentially how long you can continue to run at the current amp draw until your batteries will need recharging. When you are using electricity, the *Current* and *Power* values will show negative. But if you have a solar panel (or when charging your batteries from shore power), it will show positive values (net energy going *into* the battery). Now we just need to get out on the water and try it all out.

<p>
<figure><img src="/img/boat/batterymonitor5.png" class="largeimg" />
</figure>
</p>

**TIP**: After I got this all set up, I noticed some weird behavior. The house battery voltage and the starter battery voltage always gave the same reading. And when I put load on the starter battery (like tilting the engine up/down), it showed the current draw from the house bank! I quadruple checked my wiring to ensure that everything was correct and that batteries were not daisy-chained together. I posted a question on the Tugnuts forum and [got a great response from Martin (Submariner)][answer] who explained what was going on. Although I had placed a blanket over my solar panel while doing the install, I had removed it afterwards. Since the batteries were nearly full, and the solar panel was now providing additional charge, this caused the ACRs to open up and essentially parallel the batteries. I followed his advice and waited until dark to make sure the solar panel was no longer putting in current, then turned on all of the lights and used some electricity to draw down the power a bit, enough to cause the ACRs to close. At that point I was able to verify that the starter and house voltages gave unique values and starter battery load no longer affected the house current draw.


[hingedoor]: ranger_tug_r23_door_hinge
[monitor]: https://www.amazon.com/Victron-BMV-712-Black-Battery-Monitor/dp/B084T2N7P1/ref=sr_1_4?crid=PPWS6363EGF5&dchild=1&keywords=victron+bmv-712+battery+monitor&qid=1632322866&sprefix=victron+bmv%2Caps%2C284&sr=8-4
[busbar]: https://www.bluesea.com/products/2127/MaxiBus_250A_BusBar_-_Four_5_16in-18_Studs
[pacer]: https://www.pacergroup.net/1-0-awg-battery-cable-assemblies-yellow/
[answer]: http://www.tugnuts.com/viewtopic.php?f=6&t=17960&sid=0abf3d2d00ed463008fc426f91f6d99b&start=30#p124623
