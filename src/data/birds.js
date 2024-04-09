function bird(image, name, lifespan, group, food, description, height, weight, found, summary) {
    this.image = image,
    this.name = name,
    this.lifespan = lifespan,
    this.group = group,
    this.food = food, 
    this.description = description,
    this.height = height,
    this.weight = weight,
    this.found = found,
    this.summary = summary;
}

export const birds = [
    new bird("src/assets/cassowary.png", "Cassowary", "20 Years", "Birds", "Plants matter like fruit, insects and small animals like mice amd lizards.", "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.", "1.7m", "44kg", "Queensland", " The cassowary is a large flightless bird native to the tropical forests of New Guinea, nearby islands, and northeastern Australia. Known for its striking appearance and vibrant blue skin, it is the third tallest and second heaviest bird species in the world, after the ostrich and the emu."),
    new bird("src/assets/kookaburra.png", "Kookaburra", "20 years", "Birds", "Insects and smalll animals including snakes, frogs and lizards.", "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.", "43cm", "300g", "Australia wide", "The kookaburra is a large terrestrial kingfisher native to Australia and New Guinea. Renowned for its distinctive call, which sounds like raucous laughter, it is often referred to as the 'laughing kookaburra'."),
    new bird("src/assets/yellow-tailed-black-cockatoo.png", "Yellow Tailed Black Cockatoo", "41 years", "Birds", "Fruit, seeds and other plant material.", "It has a short crest on the top of its head. Its plumage is mostly brownish black and it has prominent yellow cheek patches and a yellow tail band. The body feathers are edged with yellow giving a scalloped appearance. The adult male has a black beak and pinkish-red eye-rings, and the female has a bone-coloured beak and grey eye-rings. In flight, yellow-tailed black cockatoos flap deeply and slowly, with a peculiar heavy fluid motion. Their loud, wailing calls carry for long distances. The whiteae is found south of Victoria to the East of South Australia and is smaller in size. The yellow-tailed black cockatoo is found in temperate forests and forested areas across south and central eastern Queensland to southeastern South Australia, including a very small population persisting in the Eyre Peninsula.[4] Two subspecies are recognised, although Tasmanian and southern mainland populations of the southern subspecies xanthanotus may be distinct enough from each other to bring the total to three. Birds of subspecies funereus (Queensland to eastern Victoria) have longer wings and tails and darker plumage overall, while those of xanthanotus (western Victoria, South Australia and Tasmania) have more prominent scalloping.", "65cm", "900g", "SE Australia", " The yellow-tailed black cockatoo is a striking bird native to southeastern Australia. It is known for its distinctive appearance, with predominantly black plumage and bright yellow markings on its tail feathers and cheek patches.")
]