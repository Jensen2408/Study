/* StudyHub content — Biology & Anatomy + Chemistry
   Each chapter: { title, part, summary[], flashcards[{front,back}], quiz[{q,options[],answer,explanation}], assignment{title,scenario,tasks[],answers[]} } */

const SUBJECTS = {
  biology: {
    name: "Biology & Anatomy",
    chapters: [
      {
        title: "Introduction to Biology",
        part: "Part 1 · Foundations of Life",
        summary: [
          "<b>Biology</b> is the scientific study of living organisms and their interactions with each other and the environment.",
          "All living things share key <b>characteristics of life</b>: organization, metabolism, growth, response to stimuli, reproduction, and homeostasis.",
          "Life is organized into a <b>hierarchy</b> — atoms → molecules → cells → tissues → organs → organ systems → organism.",
          "The <b>scientific method</b> (observation, hypothesis, experiment, analysis, conclusion) is how biologists test ideas about the living world."
        ],
        flashcards: [
          {front:"Biology", back:"The scientific study of life and living organisms."},
          {front:"Homeostasis", back:"The maintenance of a stable internal environment despite external changes."},
          {front:"Metabolism", back:"All the chemical reactions that occur in an organism to sustain life."},
          {front:"Hypothesis", back:"A testable, proposed explanation for an observation."},
          {front:"Levels of organization", back:"Atom → molecule → cell → tissue → organ → organ system → organism."},
          {front:"Stimulus", back:"A change in the environment that triggers a response in an organism."}
        ],
        quiz: [
          {q:"Which of the following is NOT a characteristic shared by all living things?",
           options:["Metabolism","Reproduction","Made of metal","Response to stimuli"],answer:2,
           explanation:"All living organisms carry out metabolism, reproduce, and respond to stimuli. Being made of metal is not a characteristic of life."},
          {q:"What is the correct order of biological organization from smallest to largest?",
           options:["Cell → atom → tissue → organ","Atom → cell → tissue → organ","Organ → tissue → cell → atom","Tissue → cell → atom → organ"],answer:1,
           explanation:"Organization builds up: atoms form molecules, which form cells, then tissues, organs, and so on."},
          {q:"A testable explanation for an observation is called a:",
           options:["Theory","Law","Hypothesis","Conclusion"],answer:2,
           explanation:"A hypothesis is a proposed, testable explanation — the starting point of an experiment."},
          {q:"Maintaining a stable internal body temperature is an example of:",
           options:["Reproduction","Homeostasis","Evolution","Metabolism"],answer:1,
           explanation:"Homeostasis is keeping internal conditions (like temperature) stable regardless of the environment."}
        ],
        assignment:{
          title:"Assignment 1 · Is it alive?",
          scenario:"A student finds three things on a hike: a moss-covered rock, a crystal growing in a cave, and a beetle. She must decide which are living.",
          tasks:[
            "List the characteristics of life.",
            "Decide which of the three objects are alive and explain why.",
            "Explain why a growing crystal is NOT considered alive even though it 'grows'."
          ],
          answers:[
            "Characteristics of life: organization (cells), metabolism, growth, response to stimuli, reproduction, and homeostasis.",
            "The moss and the beetle are alive — they are made of cells, use metabolism, grow, reproduce, and respond to stimuli. The rock and crystal are not.",
            "A crystal 'grows' only by adding identical units from its surroundings — it has no cells, no metabolism, cannot reproduce or respond to stimuli, so it is not alive."
          ]
        }
      },
      {
        title: "The Chemistry of Life",
        part: "Part 1 · Foundations of Life",
        summary: [
          "Living things are made of <b>matter</b> built from atoms; the main elements of life are carbon, hydrogen, oxygen and nitrogen (CHON).",
          "<b>Water</b> is essential — its polarity makes it a great solvent and gives it cohesion, high heat capacity, and the ability to support chemical reactions.",
          "The four major <b>biological macromolecules</b> are carbohydrates, lipids, proteins, and nucleic acids.",
          "<b>pH</b> measures how acidic or basic a solution is; cells keep pH near neutral using buffers."
        ],
        flashcards: [
          {front:"The 4 main elements of life", back:"Carbon, Hydrogen, Oxygen, Nitrogen (CHON)."},
          {front:"Why is water polar?", back:"Oxygen pulls electrons more strongly than hydrogen, giving water partial charges."},
          {front:"Carbohydrates", back:"Sugars and starches — the body's quick energy source (made of C, H, O)."},
          {front:"Proteins", back:"Macromolecules made of amino acids; do most cellular work (enzymes, structure, transport)."},
          {front:"Lipids", back:"Fats, oils and phospholipids — store energy and form cell membranes."},
          {front:"Nucleic acids", back:"DNA and RNA — store and transmit genetic information."},
          {front:"pH scale", back:"0–14 scale of acidity/basicity; 7 is neutral, below 7 acidic, above 7 basic."}
        ],
        quiz: [
          {q:"Which property of water allows it to dissolve many substances?",
           options:["It is nonpolar","It is polar","It is acidic","It has no charge"],answer:1,
           explanation:"Water's polarity lets it surround and separate charged particles, making it an excellent solvent."},
          {q:"Which macromolecule is the main source of quick energy?",
           options:["Proteins","Lipids","Carbohydrates","Nucleic acids"],answer:2,
           explanation:"Carbohydrates such as glucose are the body's fastest, most accessible energy source."},
          {q:"DNA and RNA are examples of:",
           options:["Carbohydrates","Lipids","Nucleic acids","Proteins"],answer:2,
           explanation:"Nucleic acids store and transmit genetic information."},
          {q:"A solution with a pH of 3 is:",
           options:["Basic","Neutral","Acidic","Salt"],answer:2,
           explanation:"A pH below 7 is acidic; pH 3 is strongly acidic."}
        ],
        assignment:{
          title:"Assignment 2 · Match the macromolecule",
          scenario:"A nutrition label lists butter, table sugar, egg-white protein, and a vitamin supplement containing DNA-rich cells.",
          tasks:[
            "Classify each food component into one of the four macromolecule groups.",
            "State the primary function of each macromolecule in the body.",
            "Explain why water is needed for these molecules to function."
          ],
          answers:[
            "Butter = lipid; table sugar = carbohydrate; egg-white protein = protein; DNA-rich cells = nucleic acids.",
            "Lipids store energy & build membranes; carbohydrates give quick energy; proteins do cellular work; nucleic acids carry genetic info.",
            "Water is the medium for nearly all biochemical reactions and helps transport these molecules; its polarity dissolves and positions reactants."
          ]
        }
      },
      {
        title: "Cell Structure & Function",
        part: "Part 2 · The Cell",
        summary: [
          "The <b>cell</b> is the basic unit of life; the <b>cell theory</b> states all living things are made of cells and all cells come from pre-existing cells.",
          "<b>Prokaryotic</b> cells (bacteria) lack a nucleus; <b>eukaryotic</b> cells (plants, animals) have a nucleus and membrane-bound organelles.",
          "Key organelles: <b>nucleus</b> (control center), <b>mitochondria</b> (energy), <b>ribosomes</b> (protein synthesis), <b>ER</b> and <b>Golgi</b> (processing/transport).",
          "The <b>cell membrane</b> is a phospholipid bilayer that controls what enters and leaves the cell."
        ],
        flashcards: [
          {front:"Cell theory", back:"All living things are made of cells; cells are the basic unit of life; all cells come from existing cells."},
          {front:"Nucleus", back:"The control center of the cell; contains DNA."},
          {front:"Mitochondria", back:"The 'powerhouse' — produces ATP energy through cellular respiration."},
          {front:"Ribosomes", back:"Sites of protein synthesis."},
          {front:"Prokaryote vs Eukaryote", back:"Prokaryotes lack a nucleus; eukaryotes have a true nucleus and organelles."},
          {front:"Cell membrane", back:"A phospholipid bilayer controlling movement in and out of the cell."},
          {front:"Endoplasmic reticulum", back:"Network that synthesizes (rough ER) and processes (smooth ER) molecules."}
        ],
        quiz: [
          {q:"Which organelle produces most of the cell's ATP?",
           options:["Nucleus","Ribosome","Mitochondria","Golgi apparatus"],answer:2,
           explanation:"Mitochondria carry out cellular respiration, producing ATP — the cell's energy currency."},
          {q:"A cell without a nucleus is classified as:",
           options:["Eukaryotic","Prokaryotic","Plant cell","Animal cell"],answer:1,
           explanation:"Prokaryotic cells (like bacteria) lack a membrane-bound nucleus."},
          {q:"Proteins are assembled at the:",
           options:["Ribosomes","Lysosomes","Mitochondria","Nucleolus"],answer:0,
           explanation:"Ribosomes read mRNA and build proteins from amino acids."},
          {q:"The structure that controls what enters and exits the cell is the:",
           options:["Cell wall","Nucleus","Cell membrane","Cytoplasm"],answer:2,
           explanation:"The cell (plasma) membrane is selectively permeable, regulating transport."}
        ],
        assignment:{
          title:"Assignment 3 · Build a cell",
          scenario:"You are asked to compare a muscle cell (very active) with a skin cell, focusing on organelles.",
          tasks:[
            "Name the organelle you'd expect more of in a muscle cell and explain why.",
            "Describe the role of the cell membrane in both cells.",
            "Explain one difference between a prokaryotic and eukaryotic cell."
          ],
          answers:[
            "Muscle cells need lots of energy, so they have many mitochondria to produce ATP.",
            "In both, the cell membrane regulates what enters/leaves and maintains homeostasis.",
            "Prokaryotic cells have no nucleus or membrane-bound organelles; eukaryotic cells do."
          ]
        }
      },
      {
        title: "Cell Transport",
        part: "Part 2 · The Cell",
        summary: [
          "<b>Passive transport</b> needs no energy and moves substances down their concentration gradient (diffusion, osmosis, facilitated diffusion).",
          "<b>Active transport</b> requires ATP to move substances against their gradient (e.g., the sodium-potassium pump).",
          "<b>Osmosis</b> is the diffusion of water across a membrane; cells respond to hypertonic, hypotonic and isotonic solutions.",
          "Large particles move by <b>endocytosis</b> (in) and <b>exocytosis</b> (out)."
        ],
        flashcards: [
          {front:"Diffusion", back:"Movement of particles from high to low concentration; no energy needed."},
          {front:"Osmosis", back:"Diffusion of water across a selectively permeable membrane."},
          {front:"Active transport", back:"Movement against the gradient using ATP energy."},
          {front:"Hypotonic solution", back:"Lower solute outside the cell — water moves IN, cell swells."},
          {front:"Hypertonic solution", back:"Higher solute outside the cell — water moves OUT, cell shrinks."},
          {front:"Isotonic solution", back:"Equal solute inside and out — no net water movement."},
          {front:"Endocytosis / Exocytosis", back:"Bulk transport of large particles into / out of the cell."}
        ],
        quiz: [
          {q:"Which process requires energy (ATP)?",
           options:["Diffusion","Osmosis","Active transport","Facilitated diffusion"],answer:2,
           explanation:"Active transport moves substances against their gradient and must use ATP."},
          {q:"A red blood cell placed in a hypotonic solution will:",
           options:["Shrink","Swell and may burst","Stay the same","Turn into a bacterium"],answer:1,
           explanation:"In a hypotonic solution, water rushes into the cell, causing it to swell and possibly lyse."},
          {q:"Osmosis specifically refers to the movement of:",
           options:["Salt","Glucose","Water","Proteins"],answer:2,
           explanation:"Osmosis is the diffusion of water across a selectively permeable membrane."},
          {q:"In an isotonic solution, the net movement of water is:",
           options:["Into the cell","Out of the cell","Zero (balanced)","Upward"],answer:2,
           explanation:"Isotonic means equal solute concentrations, so there is no net water movement."}
        ],
        assignment:{
          title:"Assignment 4 · Saltwater & cells",
          scenario:"A nurse must understand why IV fluids are usually isotonic. A patient is accidentally given pure distilled water IV.",
          tasks:[
            "Describe what type of solution distilled water is relative to blood cells.",
            "Predict what happens to red blood cells in distilled water.",
            "Explain why isotonic IV solutions are safest."
          ],
          answers:[
            "Distilled water is hypotonic relative to blood cells (much lower solute concentration).",
            "Water moves into the cells by osmosis, causing them to swell and burst (hemolysis).",
            "Isotonic solutions have the same solute concentration as blood, so there is no net water movement and cells keep their shape."
          ]
        }
      },
      {
        title: "Cellular Energy: Respiration & Photosynthesis",
        part: "Part 2 · The Cell",
        summary: [
          "<b>ATP</b> is the energy currency of cells, releasing energy when its phosphate bond breaks.",
          "<b>Cellular respiration</b> breaks down glucose with oxygen to make ATP: glucose + O₂ → CO₂ + H₂O + ATP.",
          "<b>Photosynthesis</b> (in plants) uses sunlight, CO₂ and water to make glucose and oxygen.",
          "Respiration and photosynthesis are essentially <b>opposite, complementary</b> processes that cycle carbon and oxygen."
        ],
        flashcards: [
          {front:"ATP", back:"Adenosine triphosphate — the cell's main energy-carrying molecule."},
          {front:"Cellular respiration equation", back:"Glucose + O₂ → CO₂ + H₂O + ATP (energy)."},
          {front:"Photosynthesis equation", back:"CO₂ + H₂O + light → glucose + O₂."},
          {front:"Where does respiration occur?", back:"Mainly in the mitochondria."},
          {front:"Aerobic vs anaerobic", back:"Aerobic uses oxygen (more ATP); anaerobic does not (fermentation, less ATP)."},
          {front:"Fermentation", back:"Anaerobic breakdown of glucose; produces lactic acid (muscles) or alcohol (yeast)."}
        ],
        quiz: [
          {q:"What is the main energy molecule used by cells?",
           options:["DNA","Glucose","ATP","Oxygen"],answer:2,
           explanation:"ATP stores and delivers energy for cellular work."},
          {q:"Cellular respiration mainly occurs in the:",
           options:["Nucleus","Mitochondria","Ribosome","Cell wall"],answer:1,
           explanation:"The mitochondria are the site of aerobic respiration and ATP production."},
          {q:"Which gas is required for aerobic respiration?",
           options:["Carbon dioxide","Nitrogen","Oxygen","Hydrogen"],answer:2,
           explanation:"Aerobic respiration uses oxygen to fully break down glucose for maximum ATP."},
          {q:"During strenuous exercise with low oxygen, muscle cells produce:",
           options:["Alcohol","Lactic acid","Glucose","Oxygen"],answer:1,
           explanation:"With insufficient oxygen, muscles perform lactic acid fermentation."}
        ],
        assignment:{
          title:"Assignment 5 · The energy cycle",
          scenario:"A runner sprints until her legs burn, while nearby a tree photosynthesizes in the sun.",
          tasks:[
            "Write the word equation for cellular respiration.",
            "Explain why the runner's legs 'burn' during the sprint.",
            "Describe how photosynthesis and respiration are linked in the ecosystem."
          ],
          answers:[
            "Glucose + oxygen → carbon dioxide + water + ATP (energy).",
            "When oxygen runs low, muscles switch to anaerobic fermentation, producing lactic acid that causes the burning sensation.",
            "Photosynthesis makes glucose and O₂ that organisms use in respiration, while respiration releases CO₂ and water that plants use in photosynthesis — a continuous cycle."
          ]
        }
      },
      {
        title: "Cell Division & the Cell Cycle",
        part: "Part 3 · Genetics & Reproduction",
        summary: [
          "The <b>cell cycle</b> includes interphase (G1, S, G2 — growth and DNA copying) and the mitotic phase (division).",
          "<b>Mitosis</b> produces two genetically identical diploid cells for growth and repair (PMAT: prophase, metaphase, anaphase, telophase).",
          "<b>Meiosis</b> produces four genetically unique haploid gametes (sex cells) for reproduction.",
          "Errors in the cell cycle can lead to uncontrolled division — <b>cancer</b>."
        ],
        flashcards: [
          {front:"Interphase", back:"The longest phase — cell grows and copies its DNA (G1, S, G2)."},
          {front:"Mitosis", back:"Division producing two identical diploid daughter cells; used for growth/repair."},
          {front:"Meiosis", back:"Division producing four unique haploid gametes for sexual reproduction."},
          {front:"Phases of mitosis (PMAT)", back:"Prophase, Metaphase, Anaphase, Telophase."},
          {front:"Diploid vs Haploid", back:"Diploid (2n) has full chromosome sets; haploid (n) has half."},
          {front:"Cancer", back:"Uncontrolled cell division due to errors/mutations in the cell cycle."}
        ],
        quiz: [
          {q:"Mitosis produces:",
           options:["4 unique haploid cells","2 identical diploid cells","1 large cell","3 cells"],answer:1,
           explanation:"Mitosis yields two genetically identical diploid daughter cells."},
          {q:"DNA is copied during which phase?",
           options:["Prophase","S phase of interphase","Anaphase","Telophase"],answer:1,
           explanation:"DNA replication happens during the S (synthesis) phase of interphase."},
          {q:"Gametes (egg and sperm) are produced by:",
           options:["Mitosis","Meiosis","Binary fission","Osmosis"],answer:1,
           explanation:"Meiosis produces haploid gametes for sexual reproduction."},
          {q:"Uncontrolled cell division can result in:",
           options:["Homeostasis","Cancer","Diffusion","Photosynthesis"],answer:1,
           explanation:"Loss of control over the cell cycle leads to cancerous tumors."}
        ],
        assignment:{
          title:"Assignment 6 · Mitosis vs Meiosis",
          scenario:"A biology student confuses the two types of cell division on a test.",
          tasks:[
            "List two differences between mitosis and meiosis.",
            "State the purpose of each type of division.",
            "Explain why gametes must be haploid."
          ],
          answers:[
            "Mitosis makes 2 identical diploid cells; meiosis makes 4 unique haploid cells. Mitosis is one division, meiosis is two.",
            "Mitosis is for growth and repair; meiosis is for producing gametes (sexual reproduction).",
            "Gametes must be haploid so that when egg and sperm fuse, the resulting zygote has the correct diploid chromosome number."
          ]
        }
      },
      {
        title: "DNA, RNA & Protein Synthesis",
        part: "Part 3 · Genetics & Reproduction",
        summary: [
          "<b>DNA</b> is a double helix of nucleotides (A-T, G-C base pairing) that stores genetic instructions.",
          "<b>Transcription</b> copies a gene's DNA into messenger RNA (mRNA) in the nucleus.",
          "<b>Translation</b> at the ribosome reads mRNA codons (3 bases) to build a protein from amino acids.",
          "The flow of genetic information is the <b>central dogma</b>: DNA → RNA → Protein."
        ],
        flashcards: [
          {front:"DNA base pairs", back:"Adenine–Thymine (A-T) and Guanine–Cytosine (G-C)."},
          {front:"Central dogma", back:"DNA → RNA → Protein."},
          {front:"Transcription", back:"Copying DNA into mRNA in the nucleus."},
          {front:"Translation", back:"Building a protein from mRNA at the ribosome."},
          {front:"Codon", back:"A sequence of 3 mRNA bases that codes for one amino acid."},
          {front:"RNA vs DNA", back:"RNA is single-stranded, uses uracil (U) instead of thymine, and has ribose sugar."}
        ],
        quiz: [
          {q:"In DNA, adenine pairs with:",
           options:["Guanine","Cytosine","Thymine","Uracil"],answer:2,
           explanation:"Adenine always pairs with thymine in DNA (A-T)."},
          {q:"The process of copying DNA into mRNA is called:",
           options:["Translation","Replication","Transcription","Mutation"],answer:2,
           explanation:"Transcription produces an mRNA copy of a gene in the nucleus."},
          {q:"A codon consists of how many bases?",
           options:["1","2","3","4"],answer:2,
           explanation:"Each codon is three mRNA bases coding for one amino acid."},
          {q:"Which base replaces thymine in RNA?",
           options:["Adenine","Uracil","Guanine","Cytosine"],answer:1,
           explanation:"RNA uses uracil (U) in place of thymine."}
        ],
        assignment:{
          title:"Assignment 7 · Decode the gene",
          scenario:"A DNA template strand reads: T-A-C-G-G-A. You must transcribe and begin translating it.",
          tasks:[
            "Write the complementary mRNA strand.",
            "Identify how many codons (amino acids) this represents.",
            "Explain where transcription and translation each take place."
          ],
          answers:[
            "mRNA: A-U-G-C-C-U (A pairs U, T pairs A, C pairs G, G pairs C).",
            "6 bases ÷ 3 = 2 codons, coding for 2 amino acids (AUG = start/methionine, CCU = proline).",
            "Transcription occurs in the nucleus; translation occurs at the ribosome in the cytoplasm."
          ]
        }
      },
      {
        title: "Genetics & Heredity",
        part: "Part 3 · Genetics & Reproduction",
        summary: [
          "<b>Gregor Mendel</b> discovered the basic rules of inheritance using pea plants.",
          "<b>Alleles</b> are versions of a gene; <b>dominant</b> alleles mask <b>recessive</b> ones.",
          "<b>Genotype</b> is the genetic makeup; <b>phenotype</b> is the physical expression.",
          "<b>Punnett squares</b> predict the probability of offspring traits."
        ],
        flashcards: [
          {front:"Allele", back:"A different version of a gene (e.g., for eye color)."},
          {front:"Dominant vs recessive", back:"Dominant allele masks recessive; recessive shows only when homozygous."},
          {front:"Genotype", back:"The genetic makeup (e.g., Bb)."},
          {front:"Phenotype", back:"The observable trait (e.g., brown eyes)."},
          {front:"Homozygous vs heterozygous", back:"Homozygous = two same alleles (BB/bb); heterozygous = two different (Bb)."},
          {front:"Punnett square", back:"A grid used to predict offspring genotype/phenotype probabilities."}
        ],
        quiz: [
          {q:"An organism's observable physical traits are its:",
           options:["Genotype","Phenotype","Allele","Chromosome"],answer:1,
           explanation:"Phenotype is the physical expression of genes."},
          {q:"A heterozygous genotype is written as:",
           options:["BB","bb","Bb","BBB"],answer:2,
           explanation:"Heterozygous means two different alleles, e.g., Bb."},
          {q:"In a cross Bb × Bb, what fraction of offspring show the recessive trait?",
           options:["1/4","1/2","3/4","All"],answer:0,
           explanation:"Only bb (1 of 4 boxes) shows the recessive phenotype — a 1/4 chance."},
          {q:"Mendel performed his foundational genetics experiments on:",
           options:["Fruit flies","Pea plants","Mice","Bacteria"],answer:1,
           explanation:"Mendel used pea plants to establish the laws of inheritance."}
        ],
        assignment:{
          title:"Assignment 8 · Punnett practice",
          scenario:"Brown eyes (B) are dominant over blue eyes (b). Two heterozygous parents (Bb × Bb) have children.",
          tasks:[
            "Complete the Punnett square for Bb × Bb.",
            "State the genotype ratio of the offspring.",
            "State the probability a child has blue eyes."
          ],
          answers:[
            "The square gives: BB, Bb, Bb, bb.",
            "Genotype ratio = 1 BB : 2 Bb : 1 bb.",
            "Blue eyes (bb) probability = 1/4 = 25%."
          ]
        }
      },
      {
        title: "Evolution & Natural Selection",
        part: "Part 4 · Evolution & Ecology",
        summary: [
          "<b>Evolution</b> is the change in heritable traits of a population over generations.",
          "<b>Charles Darwin</b> proposed <b>natural selection</b>: individuals with favorable traits survive and reproduce more.",
          "Evidence for evolution includes fossils, anatomy (homologous structures), embryology, and DNA.",
          "<b>Adaptations</b> are inherited traits that increase survival and reproduction in an environment."
        ],
        flashcards: [
          {front:"Evolution", back:"Change in the heritable traits of a population over time."},
          {front:"Natural selection", back:"Process where organisms better adapted to their environment survive and reproduce more."},
          {front:"Adaptation", back:"An inherited trait that improves survival/reproduction."},
          {front:"Homologous structures", back:"Body parts with similar structure but different function, showing common ancestry."},
          {front:"Fitness (biological)", back:"An organism's ability to survive and reproduce."},
          {front:"Charles Darwin", back:"Naturalist who proposed evolution by natural selection."}
        ],
        quiz: [
          {q:"Natural selection was proposed by:",
           options:["Mendel","Darwin","Watson","Pasteur"],answer:1,
           explanation:"Charles Darwin developed the theory of natural selection."},
          {q:"An inherited trait that improves survival is called a(n):",
           options:["Mutation","Adaptation","Allele","Phenotype"],answer:1,
           explanation:"Adaptations are favorable inherited traits."},
          {q:"Which is the strongest molecular evidence for evolution?",
           options:["Fossils","Shared DNA sequences","Rock layers","Weather"],answer:1,
           explanation:"Shared DNA across species is powerful molecular evidence of common ancestry."},
          {q:"'Survival of the fittest' refers to organisms that:",
           options:["Are strongest only","Survive and reproduce best","Live longest","Are largest"],answer:1,
           explanation:"Biological fitness means reproductive success, not just strength."}
        ],
        assignment:{
          title:"Assignment 9 · Selection in action",
          scenario:"A population of beetles is green and brown. Birds eat the more visible beetles on dark soil.",
          tasks:[
            "Predict which beetle color will become more common and why.",
            "Define natural selection in your own words.",
            "Explain how this change qualifies as evolution."
          ],
          answers:[
            "Brown beetles blend with dark soil, so they survive predation more and reproduce more — brown becomes more common.",
            "Natural selection is the process where individuals with advantageous traits survive and pass them on.",
            "Over generations the population's allele frequency shifts toward brown — a heritable change in the population, which is evolution."
          ]
        }
      },
      {
        title: "Ecology & Ecosystems",
        part: "Part 4 · Evolution & Ecology",
        summary: [
          "<b>Ecology</b> studies interactions among organisms and their environment.",
          "Energy flows through <b>food chains/webs</b> from producers → consumers → decomposers, losing energy at each level.",
          "<b>Biogeochemical cycles</b> (carbon, nitrogen, water) recycle matter through ecosystems.",
          "Populations interact through competition, predation, and symbiosis (mutualism, commensalism, parasitism)."
        ],
        flashcards: [
          {front:"Producer", back:"Organism that makes its own food via photosynthesis (e.g., plants)."},
          {front:"Consumer", back:"Organism that eats other organisms for energy."},
          {front:"Decomposer", back:"Breaks down dead matter, recycling nutrients (e.g., fungi, bacteria)."},
          {front:"Food web", back:"Interconnected food chains showing energy flow in an ecosystem."},
          {front:"Mutualism", back:"Symbiosis where both species benefit."},
          {front:"10% rule", back:"Only ~10% of energy passes to the next trophic level."}
        ],
        quiz: [
          {q:"Organisms that make their own food are called:",
           options:["Consumers","Producers","Decomposers","Predators"],answer:1,
           explanation:"Producers (e.g., plants) make food via photosynthesis."},
          {q:"Approximately how much energy transfers to the next trophic level?",
           options:["10%","50%","90%","100%"],answer:0,
           explanation:"Only about 10% of energy moves up; the rest is lost mostly as heat."},
          {q:"A relationship where both organisms benefit is:",
           options:["Parasitism","Mutualism","Predation","Competition"],answer:1,
           explanation:"In mutualism, both species gain a benefit."},
          {q:"Fungi and bacteria that break down dead material are:",
           options:["Producers","Decomposers","Herbivores","Carnivores"],answer:1,
           explanation:"Decomposers recycle nutrients from dead organisms."}
        ],
        assignment:{
          title:"Assignment 10 · Build a food web",
          scenario:"An ecosystem has grass, rabbits, foxes, and mushrooms.",
          tasks:[
            "Classify each organism as producer, consumer, or decomposer.",
            "Draw the energy flow (food chain) among them.",
            "Explain what happens to the foxes if all the grass dies."
          ],
          answers:[
            "Grass = producer; rabbits = consumer (herbivore); foxes = consumer (carnivore); mushrooms = decomposer.",
            "Grass → rabbit → fox; mushrooms decompose all dead organisms and recycle nutrients.",
            "If grass dies, rabbits lose food and decline, so foxes lose prey and also decline — the whole chain is affected."
          ]
        }
      },
      {
        title: "Introduction to Human Anatomy",
        part: "Part 5 · The Human Body",
        summary: [
          "<b>Anatomy</b> is the study of body structures; <b>physiology</b> is the study of how they function.",
          "The body is organized into <b>11 organ systems</b> that work together.",
          "<b>Anatomical position</b> and directional terms (superior/inferior, anterior/posterior, medial/lateral) describe locations.",
          "The body maintains <b>homeostasis</b> through feedback loops (mostly negative feedback)."
        ],
        flashcards: [
          {front:"Anatomy vs Physiology", back:"Anatomy = structure; Physiology = function."},
          {front:"Anatomical position", back:"Standing upright, facing forward, arms at sides, palms forward."},
          {front:"Superior / Inferior", back:"Superior = toward the head; Inferior = toward the feet."},
          {front:"Anterior / Posterior", back:"Anterior = front; Posterior = back."},
          {front:"Negative feedback", back:"A loop that reverses a change to restore homeostasis (e.g., temperature control)."},
          {front:"11 organ systems", back:"Integumentary, skeletal, muscular, nervous, endocrine, cardiovascular, lymphatic, respiratory, digestive, urinary, reproductive."}
        ],
        quiz: [
          {q:"The study of how body parts function is:",
           options:["Anatomy","Physiology","Histology","Pathology"],answer:1,
           explanation:"Physiology studies function; anatomy studies structure."},
          {q:"'Superior' means toward the:",
           options:["Feet","Head","Back","Side"],answer:1,
           explanation:"Superior means toward the head/upper body."},
          {q:"Most homeostatic mechanisms use:",
           options:["Positive feedback","Negative feedback","No feedback","Random feedback"],answer:1,
           explanation:"Negative feedback counteracts changes to keep the body stable."},
          {q:"How many organ systems are in the human body?",
           options:["5","8","11","20"],answer:2,
           explanation:"There are 11 organ systems working together."}
        ],
        assignment:{
          title:"Assignment 11 · Directional terms",
          scenario:"A nurse charts an injury: a wound on the front of the knee and another above the elbow.",
          tasks:[
            "Give the anatomical term for the 'front' of the knee.",
            "Is the elbow superior or inferior to the wrist?",
            "Explain why standardized directional terms matter in healthcare."
          ],
          answers:[
            "The front is 'anterior' (the anterior knee).",
            "The elbow is superior to the wrist (closer to the head/shoulder).",
            "Standard terms prevent confusion, ensuring all clinicians describe and locate body parts the same way."
          ]
        }
      },
      {
        title: "The Skeletal System",
        part: "Part 5 · The Human Body",
        summary: [
          "The skeleton has <b>206 bones</b> that provide support, protection, movement, blood cell production, and mineral storage.",
          "It divides into the <b>axial skeleton</b> (skull, spine, ribs) and <b>appendicular skeleton</b> (limbs, girdles).",
          "Bones are living tissue with compact and spongy bone; <b>red marrow</b> makes blood cells.",
          "<b>Joints</b> connect bones; cartilage and ligaments stabilize and cushion them."
        ],
        flashcards: [
          {front:"Number of bones in adult body", back:"206 bones."},
          {front:"Functions of the skeleton", back:"Support, protection, movement, blood cell production, mineral storage."},
          {front:"Axial vs appendicular", back:"Axial = skull, spine, ribs; Appendicular = limbs and girdles."},
          {front:"Red bone marrow", back:"Produces red and white blood cells (hematopoiesis)."},
          {front:"Ligament", back:"Connective tissue connecting bone to bone."},
          {front:"Joint", back:"A point where two bones meet, allowing movement."}
        ],
        quiz: [
          {q:"How many bones are in the adult human body?",
           options:["106","206","306","406"],answer:1,
           explanation:"The adult skeleton has 206 bones."},
          {q:"Which part of bone produces blood cells?",
           options:["Cartilage","Red marrow","Ligament","Enamel"],answer:1,
           explanation:"Red bone marrow carries out hematopoiesis (blood cell formation)."},
          {q:"The skull and spine belong to the:",
           options:["Appendicular skeleton","Axial skeleton","Muscular system","Nervous system"],answer:1,
           explanation:"The axial skeleton includes the skull, vertebral column, and rib cage."},
          {q:"Tissue connecting bone to bone is a:",
           options:["Tendon","Ligament","Muscle","Nerve"],answer:1,
           explanation:"Ligaments connect bone to bone; tendons connect muscle to bone."}
        ],
        assignment:{
          title:"Assignment 12 · Bones at work",
          scenario:"An elderly patient with osteoporosis fractures a hip and has low blood cell counts.",
          tasks:[
            "Name two functions of the skeleton relevant to this patient.",
            "Explain the link between bone marrow and the low blood cell count.",
            "Classify the hip bone as axial or appendicular."
          ],
          answers:[
            "Support/movement (the hip bears weight) and mineral storage/blood cell production.",
            "Red bone marrow makes blood cells; damaged or diseased marrow can lower blood cell counts.",
            "The hip (pelvic girdle) is part of the appendicular skeleton."
          ]
        }
      },
      {
        title: "The Muscular System",
        part: "Part 5 · The Human Body",
        summary: [
          "There are three muscle types: <b>skeletal</b> (voluntary), <b>cardiac</b> (heart), and <b>smooth</b> (involuntary, organs).",
          "Muscles contract when stimulated by nerves, using the <b>sliding filament</b> mechanism (actin & myosin).",
          "Skeletal muscles work in <b>antagonistic pairs</b> (e.g., biceps and triceps).",
          "Muscle contraction requires <b>ATP</b> and calcium."
        ],
        flashcards: [
          {front:"Three muscle types", back:"Skeletal (voluntary), cardiac (heart), smooth (involuntary)."},
          {front:"Skeletal muscle", back:"Voluntary, striated muscle attached to bones for movement."},
          {front:"Cardiac muscle", back:"Involuntary striated muscle found only in the heart."},
          {front:"Sliding filament theory", back:"Actin and myosin filaments slide past each other to shorten the muscle."},
          {front:"Antagonistic pair", back:"Two muscles producing opposite movements (biceps flex, triceps extend)."},
          {front:"Tendon", back:"Connective tissue attaching muscle to bone."}
        ],
        quiz: [
          {q:"Which muscle type is found only in the heart?",
           options:["Skeletal","Smooth","Cardiac","Voluntary"],answer:2,
           explanation:"Cardiac muscle is unique to the heart and is involuntary."},
          {q:"The proteins responsible for muscle contraction are:",
           options:["Actin and myosin","DNA and RNA","Glucose and ATP","Calcium and sodium"],answer:0,
           explanation:"Actin and myosin slide past each other to contract the muscle."},
          {q:"Biceps and triceps are an example of:",
           options:["Identical muscles","An antagonistic pair","Smooth muscle","Cardiac muscle"],answer:1,
           explanation:"They work in opposition: one flexes while the other extends the arm."},
          {q:"Muscle contraction directly requires:",
           options:["Oxygen only","ATP and calcium","Carbon dioxide","Water only"],answer:1,
           explanation:"ATP powers the cross-bridge cycle and calcium triggers contraction."}
        ],
        assignment:{
          title:"Assignment 13 · How muscles move",
          scenario:"A patient lifts a cup to drink, bending the elbow.",
          tasks:[
            "Identify which muscle contracts and which relaxes when bending the elbow.",
            "Name the muscle type involved and whether it is voluntary.",
            "Explain what supplies the energy for this movement."
          ],
          answers:[
            "The biceps contracts (flexes) while the triceps relaxes.",
            "Skeletal muscle, which is voluntary (under conscious control).",
            "ATP supplies the energy, with calcium triggering the actin–myosin sliding."
          ]
        }
      },
      {
        title: "The Nervous System",
        part: "Part 6 · Control & Coordination",
        summary: [
          "The nervous system has the <b>central nervous system</b> (brain, spinal cord) and <b>peripheral nervous system</b> (nerves).",
          "<b>Neurons</b> transmit electrical impulses; the gap between them is a <b>synapse</b> where neurotransmitters cross.",
          "A <b>reflex arc</b> gives rapid, automatic responses without involving the brain.",
          "The brain regions (cerebrum, cerebellum, brainstem) control thought, coordination, and vital functions."
        ],
        flashcards: [
          {front:"Neuron", back:"A nerve cell that transmits electrical impulses."},
          {front:"CNS vs PNS", back:"CNS = brain + spinal cord; PNS = all other nerves."},
          {front:"Synapse", back:"The gap between neurons where neurotransmitters carry the signal."},
          {front:"Reflex arc", back:"A fast, automatic nerve pathway that bypasses the brain."},
          {front:"Cerebellum", back:"Brain region controlling balance and coordination."},
          {front:"Neurotransmitter", back:"A chemical that carries a signal across a synapse."}
        ],
        quiz: [
          {q:"The central nervous system consists of the:",
           options:["Brain and spinal cord","Nerves and muscles","Heart and lungs","Skin and bones"],answer:0,
           explanation:"The CNS is the brain and spinal cord."},
          {q:"The gap between two neurons is called the:",
           options:["Axon","Synapse","Dendrite","Nucleus"],answer:1,
           explanation:"The synapse is where neurotransmitters carry signals between neurons."},
          {q:"A rapid automatic response that bypasses the brain is a:",
           options:["Memory","Reflex","Thought","Emotion"],answer:1,
           explanation:"A reflex arc allows quick responses through the spinal cord."},
          {q:"Balance and coordination are controlled by the:",
           options:["Cerebrum","Cerebellum","Brainstem","Spinal cord"],answer:1,
           explanation:"The cerebellum coordinates movement and balance."}
        ],
        assignment:{
          title:"Assignment 14 · The reflex",
          scenario:"A person touches a hot stove and instantly pulls their hand away before feeling the pain.",
          tasks:[
            "Explain why the hand moves before the brain registers pain.",
            "Trace the basic path of a reflex arc.",
            "Name the structures of the central nervous system involved."
          ],
          answers:[
            "A reflex arc routes the signal through the spinal cord for an immediate response, bypassing the slower brain processing of pain.",
            "Receptor → sensory neuron → spinal cord (interneuron) → motor neuron → muscle (effector).",
            "The spinal cord (part of the CNS) coordinates the reflex; the brain is informed afterward."
          ]
        }
      },
      {
        title: "The Cardiovascular System",
        part: "Part 7 · Transport & Defense",
        summary: [
          "The heart pumps blood through a <b>double circuit</b>: pulmonary (to lungs) and systemic (to body).",
          "Blood vessels: <b>arteries</b> carry blood away from the heart, <b>veins</b> return it, <b>capillaries</b> exchange materials.",
          "Blood carries oxygen, nutrients, hormones, and wastes; components include red cells, white cells, platelets, and plasma.",
          "The heart has four chambers: two atria (receive) and two ventricles (pump)."
        ],
        flashcards: [
          {front:"Arteries", back:"Carry blood AWAY from the heart (usually oxygen-rich)."},
          {front:"Veins", back:"Carry blood back TO the heart (usually oxygen-poor)."},
          {front:"Capillaries", back:"Tiny vessels where gas and nutrient exchange occurs."},
          {front:"Four heart chambers", back:"Right & left atria (receive); right & left ventricles (pump)."},
          {front:"Red blood cells", back:"Carry oxygen using hemoglobin."},
          {front:"Pulmonary circuit", back:"Blood flow between the heart and lungs to pick up oxygen."}
        ],
        quiz: [
          {q:"Blood vessels that carry blood away from the heart are:",
           options:["Veins","Arteries","Capillaries","Nerves"],answer:1,
           explanation:"Arteries carry blood away from the heart."},
          {q:"Gas exchange between blood and tissues occurs in the:",
           options:["Arteries","Veins","Capillaries","Ventricles"],answer:2,
           explanation:"Capillaries are thin enough to allow exchange of gases and nutrients."},
          {q:"Which blood cells carry oxygen?",
           options:["White blood cells","Red blood cells","Platelets","Plasma"],answer:1,
           explanation:"Red blood cells contain hemoglobin that binds oxygen."},
          {q:"The heart chambers that pump blood out are the:",
           options:["Atria","Ventricles","Valves","Veins"],answer:1,
           explanation:"Ventricles are the powerful pumping chambers."}
        ],
        assignment:{
          title:"Assignment 15 · Follow the blood",
          scenario:"A patient's oxygen-poor blood returns from the body and must be re-oxygenated.",
          tasks:[
            "Trace the path of blood from the body back out re-oxygenated (name the circuit).",
            "Explain the difference between arteries and veins.",
            "State which blood component carries the oxygen."
          ],
          answers:[
            "Body → right atrium → right ventricle → lungs (pulmonary circuit, picks up O₂) → left atrium → left ventricle → body (systemic circuit).",
            "Arteries carry blood away from the heart under high pressure; veins return blood to the heart and have valves.",
            "Red blood cells (via hemoglobin) carry the oxygen."
          ]
        }
      },
      {
        title: "The Respiratory System",
        part: "Part 7 · Transport & Defense",
        summary: [
          "The respiratory system brings in <b>oxygen</b> and removes <b>carbon dioxide</b>.",
          "Air travels: nose → pharynx → larynx → trachea → bronchi → <b>alveoli</b> (tiny air sacs in the lungs).",
          "Gas exchange occurs across alveoli walls into surrounding capillaries by <b>diffusion</b>.",
          "The <b>diaphragm</b> contracts to draw air in (inhalation) and relaxes to push air out (exhalation)."
        ],
        flashcards: [
          {front:"Alveoli", back:"Tiny air sacs in the lungs where gas exchange occurs."},
          {front:"Diaphragm", back:"The main breathing muscle below the lungs."},
          {front:"Trachea", back:"The windpipe carrying air to the bronchi."},
          {front:"Gas exchange", back:"O₂ diffuses into blood and CO₂ diffuses out, across the alveoli."},
          {front:"Inhalation", back:"Diaphragm contracts, chest expands, air is drawn in."},
          {front:"Bronchi", back:"Two airways branching from the trachea into each lung."}
        ],
        quiz: [
          {q:"Gas exchange in the lungs occurs in the:",
           options:["Trachea","Bronchi","Alveoli","Larynx"],answer:2,
           explanation:"The thin-walled alveoli are the site of gas exchange."},
          {q:"The main muscle of breathing is the:",
           options:["Heart","Diaphragm","Biceps","Intercostal nerve"],answer:1,
           explanation:"The diaphragm contracts and relaxes to move air in and out."},
          {q:"During inhalation, the diaphragm:",
           options:["Relaxes and rises","Contracts and flattens","Disappears","Stops moving"],answer:1,
           explanation:"It contracts and flattens, expanding the chest to pull air in."},
          {q:"The gas removed from the body by the lungs is:",
           options:["Oxygen","Nitrogen","Carbon dioxide","Helium"],answer:2,
           explanation:"The lungs expel carbon dioxide, a waste product of respiration."}
        ],
        assignment:{
          title:"Assignment 16 · Take a breath",
          scenario:"A patient with pneumonia has fluid-filled alveoli and low blood oxygen.",
          tasks:[
            "Explain why fluid in the alveoli lowers blood oxygen.",
            "Trace the path of air from the nose to the alveoli.",
            "Describe what the diaphragm does during inhalation."
          ],
          answers:[
            "Fluid blocks gas diffusion across the alveoli, so less oxygen enters the blood.",
            "Nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.",
            "The diaphragm contracts and flattens, expanding the chest cavity to draw air in."
          ]
        }
      },
      {
        title: "The Digestive System",
        part: "Part 8 · Nutrition & Excretion",
        summary: [
          "Digestion breaks food into nutrients the body can absorb; it is both mechanical and chemical.",
          "Path: mouth → esophagus → stomach → <b>small intestine</b> (main absorption) → large intestine.",
          "<b>Enzymes</b> (amylase, pepsin, lipase) and accessory organs (liver, pancreas, gallbladder) aid digestion.",
          "Nutrients are absorbed through <b>villi</b> in the small intestine; water is absorbed in the large intestine."
        ],
        flashcards: [
          {front:"Where is most food absorbed?", back:"The small intestine (through villi)."},
          {front:"Enzyme", back:"A protein that speeds up chemical reactions like digestion."},
          {front:"Amylase", back:"Enzyme in saliva that breaks down starch (carbohydrates)."},
          {front:"Villi", back:"Finger-like projections in the small intestine that increase absorption surface area."},
          {front:"Role of the liver", back:"Produces bile to emulsify fats; processes nutrients."},
          {front:"Large intestine", back:"Absorbs water and forms feces."}
        ],
        quiz: [
          {q:"Most nutrient absorption occurs in the:",
           options:["Stomach","Small intestine","Large intestine","Esophagus"],answer:1,
           explanation:"The small intestine, lined with villi, absorbs most nutrients."},
          {q:"Which enzyme begins starch digestion in the mouth?",
           options:["Pepsin","Lipase","Amylase","Trypsin"],answer:2,
           explanation:"Salivary amylase starts breaking down carbohydrates."},
          {q:"Bile, which helps digest fats, is produced by the:",
           options:["Stomach","Liver","Pancreas","Kidney"],answer:1,
           explanation:"The liver produces bile (stored in the gallbladder) to emulsify fats."},
          {q:"The main job of the large intestine is to:",
           options:["Absorb water","Digest protein","Produce insulin","Make bile"],answer:0,
           explanation:"The large intestine absorbs water and forms solid waste."}
        ],
        assignment:{
          title:"Assignment 17 · From plate to cell",
          scenario:"A person eats a slice of buttered bread (carbohydrate + fat).",
          tasks:[
            "Name the enzyme that starts digesting the bread's starch and where.",
            "Explain how the fat in the butter is emulsified.",
            "Describe how the digested nutrients enter the bloodstream."
          ],
          answers:[
            "Salivary amylase starts digesting starch in the mouth.",
            "Bile from the liver (stored in the gallbladder) emulsifies the fat into small droplets for lipase to break down.",
            "Nutrients are absorbed through the villi of the small intestine into the blood capillaries."
          ]
        }
      },
      {
        title: "The Urinary System",
        part: "Part 8 · Nutrition & Excretion",
        summary: [
          "The urinary system filters blood and removes wastes as <b>urine</b>, maintaining water and salt balance.",
          "The <b>kidneys</b> are the main organs; the functional unit is the <b>nephron</b>.",
          "Path: kidneys → ureters → bladder → urethra.",
          "Kidneys help regulate <b>blood pressure</b>, pH, and fluid balance (homeostasis)."
        ],
        flashcards: [
          {front:"Main organ of the urinary system", back:"The kidneys."},
          {front:"Nephron", back:"The functional filtering unit of the kidney."},
          {front:"Urine pathway", back:"Kidney → ureter → bladder → urethra."},
          {front:"Function of kidneys", back:"Filter blood, remove wastes, balance water/salts, regulate blood pressure & pH."},
          {front:"Urea", back:"Nitrogen waste from protein breakdown, removed by the kidneys."},
          {front:"Ureter vs urethra", back:"Ureters carry urine to the bladder; the urethra carries it out of the body."}
        ],
        quiz: [
          {q:"The functional filtering unit of the kidney is the:",
           options:["Nephron","Alveolus","Villus","Neuron"],answer:0,
           explanation:"Each kidney contains millions of nephrons that filter blood."},
          {q:"Urine travels from the kidney to the bladder through the:",
           options:["Urethra","Ureter","Trachea","Aorta"],answer:1,
           explanation:"Ureters carry urine from kidneys to the bladder."},
          {q:"Besides removing waste, kidneys help regulate:",
           options:["Vision","Blood pressure and fluid balance","Digestion","Bone growth"],answer:1,
           explanation:"Kidneys regulate blood pressure, pH, and water/salt balance."},
          {q:"The nitrogen waste filtered from protein breakdown is:",
           options:["Glucose","Urea","Oxygen","Bile"],answer:1,
           explanation:"Urea is the main nitrogenous waste excreted in urine."}
        ],
        assignment:{
          title:"Assignment 18 · Kidney check",
          scenario:"A patient in kidney failure has high waste levels and swelling from fluid retention.",
          tasks:[
            "Explain why kidney failure causes waste buildup.",
            "Explain why fluid balance is disrupted.",
            "Trace the normal path of urine out of the body."
          ],
          answers:[
            "Failing kidneys can't filter wastes like urea from the blood, so they accumulate.",
            "Kidneys normally control water balance; failure causes fluid retention and swelling.",
            "Kidney → ureter → bladder → urethra → out of the body."
          ]
        }
      },
      {
        title: "The Immune System",
        part: "Part 7 · Transport & Defense",
        summary: [
          "The immune system defends the body against <b>pathogens</b> (bacteria, viruses, fungi).",
          "<b>Innate immunity</b> is the fast, general defense (skin, inflammation, phagocytes); <b>adaptive immunity</b> is specific and remembers.",
          "<b>White blood cells</b> include phagocytes and lymphocytes (B cells make antibodies, T cells attack infected cells).",
          "<b>Vaccines</b> train the immune system using harmless antigens to create memory."
        ],
        flashcards: [
          {front:"Pathogen", back:"A disease-causing organism (bacteria, virus, fungus, parasite)."},
          {front:"Innate vs adaptive immunity", back:"Innate = fast & general; adaptive = specific & has memory."},
          {front:"Antibody", back:"A protein made by B cells that binds to a specific antigen."},
          {front:"Antigen", back:"A molecule that triggers an immune response."},
          {front:"B cells vs T cells", back:"B cells make antibodies; T cells destroy infected cells."},
          {front:"Vaccine", back:"A preparation that builds immunity by exposing the body to a harmless antigen."}
        ],
        quiz: [
          {q:"A disease-causing organism is called a:",
           options:["Antibody","Pathogen","Antigen","Vaccine"],answer:1,
           explanation:"Pathogens cause disease; the immune system fights them."},
          {q:"Antibodies are produced by:",
           options:["Red blood cells","B cells","Platelets","Neurons"],answer:1,
           explanation:"B lymphocytes produce antibodies specific to antigens."},
          {q:"Which immunity is specific and has memory?",
           options:["Innate","Adaptive","Passive only","None"],answer:1,
           explanation:"Adaptive immunity targets specific pathogens and remembers them."},
          {q:"Vaccines work by:",
           options:["Killing all bacteria","Training the immune system with a harmless antigen","Replacing blood","Adding antibiotics"],answer:1,
           explanation:"Vaccines expose the body to a harmless antigen so it builds memory cells."}
        ],
        assignment:{
          title:"Assignment 19 · Fighting infection",
          scenario:"A child gets a measles vaccine, then years later is exposed to measles but doesn't get sick.",
          tasks:[
            "Explain how the vaccine protected the child.",
            "Describe the role of B cells and antibodies.",
            "Distinguish innate from adaptive immunity in this scenario."
          ],
          answers:[
            "The vaccine exposed the immune system to harmless measles antigens, creating memory cells.",
            "B cells produced antibodies against the measles antigen; memory B cells responded rapidly on re-exposure.",
            "Innate immunity (skin, phagocytes) gives immediate general defense; the adaptive response (memory cells) provided the specific, lasting protection here."
          ]
        }
      },
      {
        title: "The Endocrine & Reproductive Systems",
        part: "Part 9 · Regulation & Continuity",
        summary: [
          "The <b>endocrine system</b> uses <b>hormones</b> (chemical messengers) released by glands into the blood.",
          "Key glands: pituitary (master gland), thyroid, adrenal, pancreas (insulin/glucagon for blood sugar).",
          "The <b>reproductive system</b> produces gametes and hormones; it ensures continuation of the species.",
          "Hormones act slower than nerves but have longer-lasting, widespread effects."
        ],
        flashcards: [
          {front:"Hormone", back:"A chemical messenger released by glands into the blood."},
          {front:"Pituitary gland", back:"The 'master gland' that controls other endocrine glands."},
          {front:"Insulin", back:"Hormone from the pancreas that lowers blood sugar."},
          {front:"Glucagon", back:"Hormone from the pancreas that raises blood sugar."},
          {front:"Thyroid gland", back:"Regulates metabolism via hormones (e.g., thyroxine)."},
          {front:"Nervous vs endocrine", back:"Nervous = fast, brief; endocrine = slower, longer-lasting."}
        ],
        quiz: [
          {q:"Chemical messengers released by glands are called:",
           options:["Enzymes","Hormones","Antibodies","Neurons"],answer:1,
           explanation:"Hormones are the endocrine system's chemical messengers."},
          {q:"Which hormone lowers blood sugar?",
           options:["Glucagon","Insulin","Adrenaline","Thyroxine"],answer:1,
           explanation:"Insulin from the pancreas lowers blood glucose."},
          {q:"The 'master gland' of the endocrine system is the:",
           options:["Thyroid","Pituitary","Adrenal","Pancreas"],answer:1,
           explanation:"The pituitary controls many other endocrine glands."},
          {q:"Compared to the nervous system, hormones act:",
           options:["Faster and briefly","Slower and longer","Identically","Never"],answer:1,
           explanation:"Endocrine signals are slower to start but longer-lasting."}
        ],
        assignment:{
          title:"Assignment 20 · Blood sugar balance",
          scenario:"After a big meal, a person's blood sugar spikes; hours later, between meals, it drops.",
          tasks:[
            "Name the hormone released after the meal and its effect.",
            "Name the hormone released between meals and its effect.",
            "Explain how this illustrates negative feedback and homeostasis."
          ],
          answers:[
            "Insulin is released after eating; it lowers blood sugar by helping cells take in glucose.",
            "Glucagon is released between meals; it raises blood sugar by releasing stored glucose from the liver.",
            "The body detects the change and releases the opposite hormone to reverse it, keeping blood sugar stable — classic negative feedback maintaining homeostasis."
          ]
        }
      }
    ]
  },

  chemistry: {
    name: "Chemistry",
    chapters: [
      {
        title: "Introduction to Chemistry",
        part: "Part 1 · Matter & Measurement",
        summary: [
          "<b>Chemistry</b> is the study of matter, its properties, and the changes it undergoes.",
          "<b>Matter</b> is anything with mass and volume; it exists as solid, liquid, gas, or plasma.",
          "<b>Physical changes</b> alter form but not identity; <b>chemical changes</b> form new substances.",
          "The <b>scientific method</b> and careful measurement underlie all of chemistry."
        ],
        flashcards: [
          {front:"Chemistry", back:"The study of matter, its properties, and its changes."},
          {front:"Matter", back:"Anything that has mass and takes up space (volume)."},
          {front:"States of matter", back:"Solid, liquid, gas (and plasma)."},
          {front:"Physical change", back:"A change in form without changing identity (e.g., melting ice)."},
          {front:"Chemical change", back:"A change that produces a new substance (e.g., burning wood)."},
          {front:"Property", back:"A characteristic used to describe or identify matter."}
        ],
        quiz: [
          {q:"Which is a chemical change?",
           options:["Melting ice","Burning paper","Cutting wood","Boiling water"],answer:1,
           explanation:"Burning produces new substances (ash, gases) — a chemical change."},
          {q:"Matter is defined as anything that has:",
           options:["Color and taste","Mass and volume","Energy only","Charge only"],answer:1,
           explanation:"Matter has mass and occupies space (volume)."},
          {q:"Melting ice into water is a:",
           options:["Chemical change","Physical change","Nuclear change","New element"],answer:1,
           explanation:"Melting changes state but not chemical identity — it's physical."},
          {q:"Which is NOT a state of matter?",
           options:["Solid","Liquid","Gas","Energy"],answer:3,
           explanation:"Energy is not a state of matter; solid, liquid and gas are."}
        ],
        assignment:{
          title:"Assignment 1 · Physical or chemical?",
          scenario:"In a kitchen: ice melts, bread toasts, sugar dissolves in tea, and an egg fries.",
          tasks:[
            "Classify each event as a physical or chemical change.",
            "State one clue that signals a chemical change.",
            "Explain why dissolving sugar is physical, not chemical."
          ],
          answers:[
            "Ice melting = physical; toasting bread = chemical; dissolving sugar = physical; frying egg = chemical.",
            "Clues of chemical change: color change, gas/odor produced, heat/light released, or hard-to-reverse new substance.",
            "Dissolved sugar is still sugar — its identity is unchanged and it can be recovered by evaporation, so it's physical."
          ]
        }
      },
      {
        title: "Atomic Structure",
        part: "Part 2 · Atoms & Elements",
        summary: [
          "Atoms are the basic units of matter, made of <b>protons</b> (+), <b>neutrons</b> (0), and <b>electrons</b> (–).",
          "Protons and neutrons form the dense <b>nucleus</b>; electrons orbit in energy levels (shells).",
          "<b>Atomic number</b> = number of protons (defines the element); <b>mass number</b> = protons + neutrons.",
          "<b>Isotopes</b> are atoms of the same element with different numbers of neutrons."
        ],
        flashcards: [
          {front:"Proton", back:"Positively charged particle in the nucleus; defines the element."},
          {front:"Neutron", back:"Neutral particle in the nucleus; adds mass."},
          {front:"Electron", back:"Negatively charged particle orbiting the nucleus."},
          {front:"Atomic number", back:"The number of protons in an atom."},
          {front:"Mass number", back:"Protons + neutrons."},
          {front:"Isotope", back:"Same element, different number of neutrons."}
        ],
        quiz: [
          {q:"The atomic number equals the number of:",
           options:["Neutrons","Protons","Electrons + neutrons","Atoms"],answer:1,
           explanation:"Atomic number = number of protons, which defines the element."},
          {q:"Which particle has a negative charge?",
           options:["Proton","Neutron","Electron","Nucleus"],answer:2,
           explanation:"Electrons carry a negative charge."},
          {q:"Isotopes of an element differ in their number of:",
           options:["Protons","Electrons","Neutrons","Charges"],answer:2,
           explanation:"Isotopes have the same protons but different neutrons."},
          {q:"The nucleus of an atom contains:",
           options:["Protons and electrons","Protons and neutrons","Only electrons","Only neutrons"],answer:1,
           explanation:"The nucleus holds protons and neutrons; electrons orbit outside."}
        ],
        assignment:{
          title:"Assignment 2 · Inside the atom",
          scenario:"Carbon-12 and Carbon-14 are two forms of carbon. Carbon's atomic number is 6.",
          tasks:[
            "State how many protons each has.",
            "Calculate the neutrons in Carbon-12 and Carbon-14.",
            "Explain why they are called isotopes."
          ],
          answers:[
            "Both have 6 protons (atomic number 6 defines carbon).",
            "Carbon-12: 12 − 6 = 6 neutrons. Carbon-14: 14 − 6 = 8 neutrons.",
            "They are isotopes because they are the same element (same protons) but have different numbers of neutrons."
          ]
        }
      },
      {
        title: "The Periodic Table",
        part: "Part 2 · Atoms & Elements",
        summary: [
          "The <b>periodic table</b> organizes elements by increasing atomic number.",
          "<b>Periods</b> are rows; <b>groups/families</b> are columns with similar properties.",
          "Major categories: <b>metals</b>, <b>nonmetals</b>, and <b>metalloids</b>.",
          "Key groups include alkali metals, halogens, and noble gases (stable/inert)."
        ],
        flashcards: [
          {front:"Period", back:"A horizontal row in the periodic table."},
          {front:"Group / Family", back:"A vertical column; elements share similar properties."},
          {front:"Noble gases", back:"Group 18 — very stable, unreactive elements."},
          {front:"Alkali metals", back:"Group 1 — highly reactive metals."},
          {front:"Halogens", back:"Group 17 — very reactive nonmetals."},
          {front:"Metalloid", back:"Element with properties of both metals and nonmetals."}
        ],
        quiz: [
          {q:"Columns in the periodic table are called:",
           options:["Periods","Groups","Rows","Shells"],answer:1,
           explanation:"Vertical columns are groups (families) with similar properties."},
          {q:"Which group is the most stable/unreactive?",
           options:["Alkali metals","Halogens","Noble gases","Metalloids"],answer:2,
           explanation:"Noble gases (Group 18) have full outer shells and are inert."},
          {q:"The periodic table is arranged by increasing:",
           options:["Mass number","Atomic number","Density","Color"],answer:1,
           explanation:"Elements are ordered by increasing atomic number (protons)."},
          {q:"An element with properties of both metals and nonmetals is a:",
           options:["Halogen","Noble gas","Metalloid","Alkali metal"],answer:2,
           explanation:"Metalloids (e.g., silicon) share metal and nonmetal traits."}
        ],
        assignment:{
          title:"Assignment 3 · Reading the table",
          scenario:"You're given sodium (Group 1), chlorine (Group 17), and neon (Group 18).",
          tasks:[
            "Classify each by reactivity (very reactive or unreactive).",
            "Name the family each belongs to.",
            "Predict which two could easily react together and why."
          ],
          answers:[
            "Sodium = very reactive; chlorine = very reactive; neon = unreactive.",
            "Sodium = alkali metal; chlorine = halogen; neon = noble gas.",
            "Sodium and chlorine react readily — sodium loses an electron and chlorine gains one, forming NaCl (table salt)."
          ]
        }
      },
      {
        title: "Chemical Bonding",
        part: "Part 3 · Compounds & Bonds",
        summary: [
          "Atoms bond to achieve a stable, full outer electron shell (the <b>octet rule</b>).",
          "<b>Ionic bonds</b> form by transferring electrons (metal + nonmetal), creating charged ions.",
          "<b>Covalent bonds</b> form by sharing electrons (nonmetal + nonmetal).",
          "<b>Metallic bonds</b> involve a 'sea' of shared electrons among metal atoms."
        ],
        flashcards: [
          {front:"Octet rule", back:"Atoms tend to gain, lose, or share electrons to get 8 in their outer shell."},
          {front:"Ionic bond", back:"Bond formed by transferring electrons (metal + nonmetal)."},
          {front:"Covalent bond", back:"Bond formed by sharing electrons (nonmetal + nonmetal)."},
          {front:"Ion", back:"A charged atom that has lost or gained electrons."},
          {front:"Cation vs anion", back:"Cation = positive (lost e⁻); anion = negative (gained e⁻)."},
          {front:"Metallic bond", back:"Bonding from a shared 'sea' of delocalized electrons in metals."}
        ],
        quiz: [
          {q:"An ionic bond forms by:",
           options:["Sharing electrons","Transferring electrons","Sharing protons","Losing neutrons"],answer:1,
           explanation:"Ionic bonds transfer electrons from metal to nonmetal, forming ions."},
          {q:"A bond formed by sharing electrons is:",
           options:["Ionic","Covalent","Metallic","Nuclear"],answer:1,
           explanation:"Covalent bonds involve shared electron pairs between nonmetals."},
          {q:"A positively charged ion is a:",
           options:["Anion","Cation","Neutron","Isotope"],answer:1,
           explanation:"A cation has lost electrons, giving it a positive charge."},
          {q:"Atoms bond mainly to:",
           options:["Gain mass","Achieve a full outer electron shell","Lose protons","Become radioactive"],answer:1,
           explanation:"Bonding gives atoms a stable, full outer shell (octet rule)."}
        ],
        assignment:{
          title:"Assignment 4 · Make a bond",
          scenario:"Sodium (1 outer electron) meets chlorine (7 outer electrons); separately, two oxygen atoms meet.",
          tasks:[
            "Describe the bond formed between sodium and chlorine.",
            "Identify the ions formed (charges) for Na and Cl.",
            "Describe the type of bond between the two oxygen atoms."
          ],
          answers:[
            "An ionic bond — sodium transfers its electron to chlorine, forming NaCl.",
            "Sodium becomes Na⁺ (cation, lost 1 e⁻); chlorine becomes Cl⁻ (anion, gained 1 e⁻).",
            "Two oxygen atoms share electrons, forming a covalent bond (O₂)."
          ]
        }
      },
      {
        title: "Chemical Reactions",
        part: "Part 4 · Reactions & Stoichiometry",
        summary: [
          "A <b>chemical reaction</b> rearranges atoms to form new substances; reactants → products.",
          "Reactions must obey the <b>law of conservation of mass</b> — atoms are balanced on both sides.",
          "Main types: synthesis, decomposition, single replacement, double replacement, and combustion.",
          "Signs of a reaction: gas, precipitate, color change, or temperature change."
        ],
        flashcards: [
          {front:"Reactants vs products", back:"Reactants are starting materials; products are what's formed."},
          {front:"Conservation of mass", back:"Matter is neither created nor destroyed; atoms must balance."},
          {front:"Synthesis reaction", back:"Two or more substances combine: A + B → AB."},
          {front:"Decomposition reaction", back:"One compound breaks apart: AB → A + B."},
          {front:"Combustion", back:"A fuel reacts with oxygen, releasing heat and light."},
          {front:"Precipitate", back:"An insoluble solid formed during a reaction."}
        ],
        quiz: [
          {q:"In a balanced equation, the number of atoms is:",
           options:["Greater in products","Equal on both sides","Greater in reactants","Random"],answer:1,
           explanation:"Conservation of mass requires equal atoms on both sides."},
          {q:"A + B → AB describes a ___ reaction.",
           options:["Decomposition","Synthesis","Combustion","Single replacement"],answer:1,
           explanation:"Combining substances into one product is synthesis."},
          {q:"Burning methane in oxygen is an example of:",
           options:["Decomposition","Synthesis","Combustion","Precipitation"],answer:2,
           explanation:"Combustion is a fuel reacting with oxygen, releasing energy."},
          {q:"Which is a sign that a chemical reaction occurred?",
           options:["A color change","A change in shape only","Dissolving sugar","Melting"],answer:0,
           explanation:"Color change (or gas, precipitate, temperature change) signals a reaction."}
        ],
        assignment:{
          title:"Assignment 5 · Balance & classify",
          scenario:"Consider the unbalanced reaction: H₂ + O₂ → H₂O.",
          tasks:[
            "Balance the equation.",
            "Classify the reaction type.",
            "Explain how the balanced equation shows conservation of mass."
          ],
          answers:[
            "2H₂ + O₂ → 2H₂O.",
            "It is a synthesis reaction (elements combine to form a compound).",
            "Both sides have 4 hydrogen atoms and 2 oxygen atoms, so mass/atoms are conserved."
          ]
        }
      },
      {
        title: "The Mole & Stoichiometry",
        part: "Part 4 · Reactions & Stoichiometry",
        summary: [
          "The <b>mole</b> is a counting unit: 1 mole = 6.022 × 10²³ particles (<b>Avogadro's number</b>).",
          "<b>Molar mass</b> (g/mol) equals an element's atomic mass; for compounds, sum the atoms.",
          "<b>Stoichiometry</b> uses balanced equations to relate amounts of reactants and products.",
          "Mole ratios from the balanced equation let you convert between substances."
        ],
        flashcards: [
          {front:"Mole", back:"6.022 × 10²³ particles of a substance (Avogadro's number)."},
          {front:"Avogadro's number", back:"6.022 × 10²³ — particles in one mole."},
          {front:"Molar mass", back:"Mass of one mole of a substance (g/mol)."},
          {front:"Stoichiometry", back:"Using balanced equations to calculate amounts of reactants/products."},
          {front:"Mole ratio", back:"The ratio of coefficients in a balanced equation."},
          {front:"Molar mass of water", back:"~18 g/mol (2×1 + 16)."}
        ],
        quiz: [
          {q:"One mole contains how many particles?",
           options:["6.022 × 10²³","3.14","1000","100"],answer:0,
           explanation:"A mole is Avogadro's number, 6.022 × 10²³ particles."},
          {q:"Molar mass is expressed in:",
           options:["meters","grams per mole","liters","degrees"],answer:1,
           explanation:"Molar mass has units of grams per mole (g/mol)."},
          {q:"The molar mass of water (H₂O) is about:",
           options:["10 g/mol","18 g/mol","32 g/mol","44 g/mol"],answer:1,
           explanation:"2(1) + 16 = 18 g/mol."},
          {q:"Mole ratios come from a balanced equation's:",
           options:["Subscripts","Coefficients","Charges","Symbols"],answer:1,
           explanation:"Coefficients give the mole ratios between substances."}
        ],
        assignment:{
          title:"Assignment 6 · Counting molecules",
          scenario:"You have 2 moles of water (H₂O). Atomic masses: H = 1, O = 16.",
          tasks:[
            "Calculate the molar mass of water.",
            "Find the mass of 2 moles of water.",
            "State how many molecules are in 2 moles."
          ],
          answers:[
            "Molar mass of H₂O = 2(1) + 16 = 18 g/mol.",
            "2 mol × 18 g/mol = 36 grams.",
            "2 × 6.022 × 10²³ = 1.2044 × 10²⁴ molecules."
          ]
        }
      },
      {
        title: "States of Matter & Gas Laws",
        part: "Part 5 · Physical Chemistry",
        summary: [
          "Matter changes state as energy is added or removed: melting, freezing, evaporation, condensation, sublimation.",
          "<b>Kinetic theory</b>: particles are in constant motion; temperature measures average kinetic energy.",
          "<b>Gas laws</b> relate pressure, volume, and temperature (Boyle's, Charles's, combined laws).",
          "<b>Boyle's law</b>: P and V are inversely related; <b>Charles's law</b>: V and T are directly related."
        ],
        flashcards: [
          {front:"Kinetic theory", back:"All particles are in constant motion; heat increases their motion."},
          {front:"Boyle's law", back:"At constant temperature, pressure and volume are inversely related (PV = constant)."},
          {front:"Charles's law", back:"At constant pressure, volume and temperature are directly related."},
          {front:"Sublimation", back:"Solid changing directly to gas (e.g., dry ice)."},
          {front:"Evaporation vs condensation", back:"Evaporation = liquid→gas; condensation = gas→liquid."},
          {front:"Temperature", back:"A measure of the average kinetic energy of particles."}
        ],
        quiz: [
          {q:"Boyle's law states that pressure and volume are:",
           options:["Directly related","Inversely related","Unrelated","Always equal"],answer:1,
           explanation:"At constant temperature, increasing pressure decreases volume."},
          {q:"Solid changing directly to gas is called:",
           options:["Melting","Sublimation","Condensation","Freezing"],answer:1,
           explanation:"Sublimation skips the liquid phase (e.g., dry ice)."},
          {q:"Temperature is a measure of the average ___ of particles.",
           options:["Mass","Kinetic energy","Charge","Color"],answer:1,
           explanation:"Temperature reflects average kinetic energy (motion)."},
          {q:"According to Charles's law, heating a gas at constant pressure will:",
           options:["Decrease its volume","Increase its volume","Not change volume","Freeze it"],answer:1,
           explanation:"Volume and temperature are directly related — heating expands the gas."}
        ],
        assignment:{
          title:"Assignment 7 · Gas behavior",
          scenario:"A sealed balloon is squeezed (volume decreases), then a different balloon is heated.",
          tasks:[
            "Using Boyle's law, predict the pressure change when the balloon is squeezed.",
            "Using Charles's law, predict what happens to the heated balloon's volume.",
            "Explain both using kinetic theory."
          ],
          answers:[
            "Squeezing decreases volume, so pressure increases (inverse relationship).",
            "Heating increases the volume of the balloon (direct relationship at constant pressure).",
            "Heating gives particles more kinetic energy so they move faster and spread out (more volume); compressing forces particles closer, hitting walls more often (more pressure)."
          ]
        }
      },
      {
        title: "Solutions & Concentration",
        part: "Part 5 · Physical Chemistry",
        summary: [
          "A <b>solution</b> is a homogeneous mixture of a <b>solute</b> dissolved in a <b>solvent</b>.",
          "Water is the 'universal solvent' because of its polarity.",
          "<b>Concentration</b> describes how much solute is present (e.g., molarity = moles/liter).",
          "Solubility is affected by temperature, pressure (for gases), and the nature of solute/solvent ('like dissolves like')."
        ],
        flashcards: [
          {front:"Solute", back:"The substance being dissolved (e.g., salt)."},
          {front:"Solvent", back:"The substance doing the dissolving (e.g., water)."},
          {front:"Solution", back:"A homogeneous mixture of solute in solvent."},
          {front:"Molarity", back:"Concentration = moles of solute per liter of solution (mol/L)."},
          {front:"'Like dissolves like'", back:"Polar solvents dissolve polar solutes; nonpolar dissolve nonpolar."},
          {front:"Saturated solution", back:"A solution holding the maximum solute it can dissolve."}
        ],
        quiz: [
          {q:"In salt water, the salt is the:",
           options:["Solvent","Solute","Solution","Precipitate"],answer:1,
           explanation:"The solute is the dissolved substance (salt); water is the solvent."},
          {q:"Molarity is defined as moles of solute per:",
           options:["Gram","Liter of solution","Mole","Kelvin"],answer:1,
           explanation:"Molarity (M) = moles of solute / liters of solution."},
          {q:"'Like dissolves like' means polar solvents best dissolve:",
           options:["Nonpolar solutes","Polar solutes","Metals only","Gases only"],answer:1,
           explanation:"Polar solvents (like water) dissolve polar/ionic solutes."},
          {q:"A solution holding the maximum dissolved solute is:",
           options:["Dilute","Unsaturated","Saturated","Empty"],answer:2,
           explanation:"A saturated solution cannot dissolve any more solute."}
        ],
        assignment:{
          title:"Assignment 8 · Make a solution",
          scenario:"A nurse dissolves 0.5 mole of glucose in water to make 2 liters of IV solution.",
          tasks:[
            "Identify the solute and solvent.",
            "Calculate the molarity of the solution.",
            "Explain why glucose (polar) dissolves well in water."
          ],
          answers:[
            "Solute = glucose; solvent = water.",
            "Molarity = 0.5 mol ÷ 2 L = 0.25 M.",
            "Water is polar and glucose is polar, so 'like dissolves like' — water surrounds and dissolves the glucose molecules."
          ]
        }
      },
      {
        title: "Acids, Bases & pH",
        part: "Part 6 · Reactions in Solution",
        summary: [
          "<b>Acids</b> release H⁺ ions (pH < 7); <b>bases</b> release OH⁻ ions (pH > 7).",
          "The <b>pH scale</b> runs 0–14; 7 is neutral. Each unit is a 10× change in acidity.",
          "Acids and bases <b>neutralize</b> each other to form water and a salt.",
          "<b>Indicators</b> (like litmus) and <b>buffers</b> (resist pH change) are important tools, especially in the body."
        ],
        flashcards: [
          {front:"Acid", back:"A substance that releases H⁺ ions; pH below 7."},
          {front:"Base", back:"A substance that releases OH⁻ ions; pH above 7."},
          {front:"pH 7", back:"Neutral (pure water)."},
          {front:"Neutralization", back:"Acid + base → salt + water."},
          {front:"Buffer", back:"A solution that resists changes in pH."},
          {front:"Indicator", back:"A substance that changes color with pH (e.g., litmus)."}
        ],
        quiz: [
          {q:"A solution with pH 2 is:",
           options:["Strongly basic","Neutral","Strongly acidic","A salt"],answer:2,
           explanation:"pH below 7 is acidic; pH 2 is strongly acidic."},
          {q:"Bases release which ion in water?",
           options:["H⁺","OH⁻","Na⁺","Cl⁻"],answer:1,
           explanation:"Bases produce hydroxide (OH⁻) ions."},
          {q:"Acid + base → ?",
           options:["More acid","Salt + water","A gas only","An element"],answer:1,
           explanation:"Neutralization produces a salt and water."},
          {q:"A solution that resists pH change is a:",
           options:["Buffer","Acid","Base","Indicator"],answer:0,
           explanation:"Buffers stabilize pH, crucial for blood and cells."}
        ],
        assignment:{
          title:"Assignment 9 · Neutralize it",
          scenario:"A lab spill of hydrochloric acid (HCl) is neutralized with sodium hydroxide (NaOH).",
          tasks:[
            "Write the products of the neutralization reaction.",
            "State whether the starting acid had a pH above or below 7.",
            "Explain why buffers are important in human blood."
          ],
          answers:[
            "HCl + NaOH → NaCl (salt) + H₂O (water).",
            "The acid (HCl) had a pH below 7.",
            "Buffers keep blood pH stable near 7.4; even small pH changes can disrupt enzymes and be dangerous, so buffers resist those changes."
          ]
        }
      },
      {
        title: "Organic Chemistry Basics",
        part: "Part 7 · Carbon Chemistry",
        summary: [
          "<b>Organic chemistry</b> is the study of carbon-containing compounds.",
          "Carbon forms four bonds, allowing chains, rings, and complex molecules.",
          "<b>Hydrocarbons</b> contain only carbon and hydrogen (alkanes, alkenes, alkynes).",
          "<b>Functional groups</b> (e.g., –OH alcohol, –COOH carboxylic acid) give molecules their properties."
        ],
        flashcards: [
          {front:"Organic chemistry", back:"The study of carbon-containing compounds."},
          {front:"How many bonds does carbon form?", back:"Four covalent bonds."},
          {front:"Hydrocarbon", back:"A compound of only carbon and hydrogen."},
          {front:"Functional group", back:"An atom group that gives a molecule characteristic properties."},
          {front:"Alkane", back:"A hydrocarbon with only single carbon–carbon bonds (e.g., methane)."},
          {front:"Hydroxyl group (–OH)", back:"Functional group that makes a molecule an alcohol."}
        ],
        quiz: [
          {q:"Organic chemistry is the study of compounds containing:",
           options:["Nitrogen","Carbon","Iron","Sodium"],answer:1,
           explanation:"Organic chemistry centers on carbon-containing compounds."},
          {q:"How many bonds does a carbon atom typically form?",
           options:["1","2","3","4"],answer:3,
           explanation:"Carbon forms four covalent bonds, enabling complex molecules."},
          {q:"A compound made only of carbon and hydrogen is a:",
           options:["Carbohydrate","Hydrocarbon","Protein","Salt"],answer:1,
           explanation:"Hydrocarbons contain only carbon and hydrogen."},
          {q:"The –OH functional group makes a molecule an:",
           options:["Acid","Alcohol","Alkane","Ester"],answer:1,
           explanation:"The hydroxyl group (–OH) characterizes alcohols."}
        ],
        assignment:{
          title:"Assignment 10 · Carbon's versatility",
          scenario:"Methane (CH₄) and ethanol (C₂H₅OH) are both organic molecules.",
          tasks:[
            "Explain why carbon can form so many different compounds.",
            "Classify methane as a hydrocarbon or not, and why.",
            "Identify the functional group in ethanol and what it makes it."
          ],
          answers:[
            "Carbon forms four stable covalent bonds and can bond to other carbons, making chains, branches, and rings — enabling huge diversity.",
            "Methane is a hydrocarbon because it contains only carbon and hydrogen.",
            "Ethanol contains the hydroxyl group (–OH), which makes it an alcohol."
          ]
        }
      },
      {
        title: "Biochemistry",
        part: "Part 7 · Carbon Chemistry",
        summary: [
          "<b>Biochemistry</b> applies chemistry to living systems and biological molecules.",
          "The four major biomolecules: <b>carbohydrates, lipids, proteins, nucleic acids</b>.",
          "<b>Enzymes</b> are protein catalysts that speed up reactions by lowering activation energy.",
          "Metabolism includes <b>catabolism</b> (breaking down, releasing energy) and <b>anabolism</b> (building up, using energy)."
        ],
        flashcards: [
          {front:"Biochemistry", back:"The chemistry of living organisms and their molecules."},
          {front:"Four biomolecules", back:"Carbohydrates, lipids, proteins, nucleic acids."},
          {front:"Enzyme", back:"A biological catalyst (usually a protein) that speeds up reactions."},
          {front:"Activation energy", back:"The energy needed to start a reaction; enzymes lower it."},
          {front:"Catabolism", back:"Breaking down molecules to release energy."},
          {front:"Anabolism", back:"Building larger molecules, using energy."}
        ],
        quiz: [
          {q:"Enzymes speed up reactions by lowering the:",
           options:["Temperature","Activation energy","Mass","pH"],answer:1,
           explanation:"Enzymes lower activation energy so reactions proceed faster."},
          {q:"Which is NOT one of the four major biomolecules?",
           options:["Carbohydrate","Lipid","Protein","Salt"],answer:3,
           explanation:"The four biomolecules are carbohydrates, lipids, proteins, and nucleic acids."},
          {q:"Breaking down molecules to release energy is:",
           options:["Anabolism","Catabolism","Synthesis","Digestion only"],answer:1,
           explanation:"Catabolism breaks molecules down and releases energy."},
          {q:"Enzymes are usually made of:",
           options:["Lipids","Carbohydrates","Proteins","Minerals"],answer:2,
           explanation:"Most enzymes are proteins."}
        ],
        assignment:{
          title:"Assignment 11 · Enzymes at work",
          scenario:"The enzyme amylase breaks starch into sugar in the mouth, but stops working in the stomach's acid.",
          tasks:[
            "Explain how amylase speeds up the breakdown of starch.",
            "State whether this is catabolism or anabolism.",
            "Explain why stomach acid might stop the enzyme from working."
          ],
          answers:[
            "Amylase lowers the activation energy needed to break the bonds in starch, speeding up the reaction.",
            "It is catabolism — a large molecule (starch) is broken into smaller ones (sugars), releasing energy.",
            "Enzymes work best at a specific pH; the stomach's strong acid changes amylase's shape (denatures it), so it can no longer function."
          ]
        }
      },
      {
        title: "Nuclear Chemistry",
        part: "Part 8 · The Nucleus & Energy",
        summary: [
          "<b>Nuclear chemistry</b> studies changes in the atom's nucleus, involving huge energy changes.",
          "<b>Radioactivity</b> is the emission of particles/energy from unstable nuclei (alpha, beta, gamma).",
          "<b>Half-life</b> is the time for half of a radioactive sample to decay.",
          "<b>Fission</b> splits heavy nuclei; <b>fusion</b> joins light nuclei (powers the sun)."
        ],
        flashcards: [
          {front:"Radioactivity", back:"Emission of particles/energy from unstable atomic nuclei."},
          {front:"Half-life", back:"Time for half of a radioactive sample to decay."},
          {front:"Alpha, beta, gamma", back:"Three types of radiation emitted in nuclear decay."},
          {front:"Fission", back:"Splitting a heavy nucleus into smaller ones, releasing energy."},
          {front:"Fusion", back:"Joining light nuclei into a heavier one (powers the sun)."},
          {front:"Isotope (nuclear)", back:"Atoms of an element differing in neutrons; some are radioactive."}
        ],
        quiz: [
          {q:"The time for half a radioactive sample to decay is its:",
           options:["Lifespan","Half-life","Decay rate","Period"],answer:1,
           explanation:"Half-life is the time for half the sample to decay."},
          {q:"Splitting a heavy nucleus is called:",
           options:["Fusion","Fission","Decay","Bonding"],answer:1,
           explanation:"Fission splits a heavy nucleus, releasing large energy."},
          {q:"The process that powers the sun is nuclear:",
           options:["Fission","Fusion","Combustion","Oxidation"],answer:1,
           explanation:"The sun fuses hydrogen into helium (fusion)."},
          {q:"Radioactivity comes from atoms with unstable:",
           options:["Electrons","Nuclei","Bonds","Charges"],answer:1,
           explanation:"Unstable nuclei emit radiation to become more stable."}
        ],
        assignment:{
          title:"Assignment 12 · Decay & energy",
          scenario:"A radioactive isotope used in medicine has a half-life of 8 days. A sample starts at 80 grams.",
          tasks:[
            "Calculate how much remains after one half-life (8 days).",
            "Calculate how much remains after 16 days (two half-lives).",
            "Explain the difference between fission and fusion."
          ],
          answers:[
            "After 8 days: 80 ÷ 2 = 40 grams remain.",
            "After 16 days: 40 ÷ 2 = 20 grams remain (two half-lives).",
            "Fission splits a heavy nucleus into smaller nuclei; fusion joins light nuclei into a heavier one. Both release large amounts of energy."
          ]
        }
      }
    ]
  }
};
