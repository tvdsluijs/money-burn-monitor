const taglines = [
  "Turning Meetings into Money-Sucking Machines!",
  "Meetings: The Burn You Didn’t Budget For.",
  "Your Meeting, Your Money. Watch it Burn.",
  "Every Second Costs, Every Minute Hurts.",
  "Meetings: The Silent Wallet Killer.",
  "Time Isn’t Free, Neither Are These Meetings.",
  "Counting the True Cost of Talking.",
  "Money Talks, Meetings Burn It.",
  "Where Conversations Meet Calculations.",
  "Watching Your Budget Go Up in Smoke, One Meeting at a Time.",
  "Making Conversations Priceless... Literally.",
  "Meetings: Because Emails Are Too Cheap.",
  "Helping You Quantify the Art of Wasting Time.",
  "Where Talking Isn’t Free, But Definitely Useless.",
  "Turning Pointless Chit-Chat into Real Expenses.",
  "Your Meeting Agenda: Burn Money, Waste Time, Repeat.",
  "The Priceless Joy of Watching Your Budget Evaporate.",
  "Meetings: A Premium Subscription to Procrastination.",
  "Calculating the True Price of Corporate Hot Air.",
  "Why Just Waste Time When You Can Waste Money Too?",
];

// Select a random tagline
const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];

// Display the tagline in the tagline element
document.getElementById("tagline").textContent = randomTagline;
