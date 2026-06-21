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
          "<b>Biology</b> is the scientific study of living organisms — including how they are structured, how they function, how they grow and reproduce, and how they interact with each other and their environment.",
          "All living things share six key <b>characteristics of life</b>: cellular organization, metabolism (chemical reactions), growth and development, response to stimuli, reproduction, and homeostasis (maintaining a stable internal environment).",
          "Life is organized into a <b>hierarchy of complexity</b>: atoms → molecules → organelles → cells → tissues → organs → organ systems → organism → population → community → ecosystem → biosphere.",
          "The <b>scientific method</b> is the foundation of all biology: it involves making an observation, forming a hypothesis (testable prediction), designing and running an experiment, collecting and analyzing data, and drawing a conclusion.",
          "A <b>hypothesis</b> must be falsifiable — it can be proven wrong. If repeated experiments support it, it may become a theory (a well-tested explanation), and eventually a scientific law (a description of what always happens).",
          "Biology is divided into many sub-disciplines including <b>cell biology, genetics, ecology, anatomy, physiology, and microbiology</b>, all united by the idea that life shares common chemical and cellular building blocks."
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
          "Living things are made of <b>matter</b> — anything with mass and volume. The most important elements for life are carbon (C), hydrogen (H), oxygen (O), and nitrogen (N), remembered as <b>CHON</b>, which make up about 96% of the human body.",
          "<b>Water</b> is the most essential molecule for life. Its polarity (unequal charge distribution) makes it an excellent solvent, gives it cohesion (water sticking to water), adhesion, a high heat capacity, and the ability to act as a medium for all biochemical reactions.",
          "The four major <b>biological macromolecules</b> (large molecules) are: <b>carbohydrates</b> (energy and structure), <b>lipids</b> (energy storage and membranes), <b>proteins</b> (do most cellular work), and <b>nucleic acids</b> (store genetic information).",
          "<b>Carbohydrates</b> are made of C, H, O in a 1:2:1 ratio. Simple sugars (monosaccharides like glucose) are quick energy; complex carbs (polysaccharides like starch and glycogen) are storage forms.",
          "<b>Proteins</b> are made of chains of amino acids. They function as enzymes, structural molecules, hormones, and transport proteins. Their shape determines their function — shape is easily disrupted by heat or pH.",
          "<b>pH</b> measures hydrogen ion concentration on a scale of 0–14. A pH below 7 is acidic, above 7 is basic, and 7 is neutral. Cells use <b>buffers</b> (chemicals that resist pH change) to maintain the near-neutral environment needed for enzymes and proteins to work properly."
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
          "The <b>cell theory</b> has three principles: all living things are made of one or more cells, the cell is the basic structural and functional unit of life, and all cells arise from pre-existing cells (no spontaneous generation).",
          "<b>Prokaryotic cells</b> (bacteria and archaea) are simpler — no membrane-bound nucleus, no organelles, smaller in size. <b>Eukaryotic cells</b> (plants, animals, fungi, protists) have a true nucleus and specialized organelles.",
          "The <b>nucleus</b> is the control center — it houses DNA and directs all cell activities. Inside the nucleus is the <b>nucleolus</b>, which makes ribosomes.",
          "<b>Mitochondria</b> produce ATP through cellular respiration (the cell's powerhouse). <b>Ribosomes</b> build proteins. The <b>rough ER</b> processes proteins; the <b>smooth ER</b> makes lipids. The <b>Golgi apparatus</b> packages and ships molecules to their destinations.",
          "Plant cells have unique structures not found in animal cells: a rigid <b>cell wall</b> (made of cellulose) for extra support, <b>chloroplasts</b> for photosynthesis, and a large central <b>vacuole</b> for storage and maintaining pressure.",
          "The <b>cell membrane</b> is a fluid phospholipid bilayer with embedded proteins. It is <b>selectively permeable</b> — it controls which substances can enter and exit, maintaining the internal environment of the cell."
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
          "<b>Passive transport</b> requires no cellular energy (ATP). Substances move down their concentration gradient — from an area of high concentration to low — until equilibrium is reached. Types include simple diffusion, facilitated diffusion, and osmosis.",
          "<b>Simple diffusion</b> is the movement of small nonpolar molecules (like O₂ and CO₂) directly through the cell membrane. <b>Facilitated diffusion</b> moves larger or polar molecules through specific protein channels — still no energy required.",
          "<b>Osmosis</b> is the diffusion of water across a selectively permeable membrane. Water moves toward the side with more solute (higher concentration). In a <b>hypotonic</b> solution (low solute outside), water enters the cell and it swells. In a <b>hypertonic</b> solution (high solute outside), water leaves and the cell shrinks. In an <b>isotonic</b> solution, no net movement occurs.",
          "<b>Active transport</b> uses ATP to move substances <i>against</i> their concentration gradient (from low to high). The <b>sodium-potassium pump</b> is a key example — it pumps 3 Na⁺ out and 2 K⁺ in to maintain cell voltage and fluid balance.",
          "<b>Endocytosis</b> is bulk transport of large particles into the cell — the membrane folds inward to engulf the substance. <b>Exocytosis</b> is the reverse — vesicles fuse with the membrane to release substances (e.g., neurotransmitters, hormones) out of the cell.",
          "Understanding cell transport is critical in nursing: IV fluids must be <b>isotonic</b> to blood to prevent cells from swelling or shrinking, and many drugs work by blocking or mimicking transport proteins."
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
          "<b>ATP (adenosine triphosphate)</b> is the universal energy currency of all cells. Energy is released when the bond between the second and third phosphate is broken. ATP is continuously regenerated from ADP + phosphate using energy from food or sunlight.",
          "<b>Cellular respiration</b> is the process cells use to extract energy from glucose. The overall equation is: <b>glucose + oxygen → carbon dioxide + water + ATP</b>. It occurs in three stages: glycolysis (cytoplasm), the Krebs cycle (mitochondria matrix), and the electron transport chain (inner mitochondrial membrane).",
          "<b>Aerobic respiration</b> (with oxygen) produces up to 36–38 ATP per glucose — very efficient. <b>Anaerobic respiration</b> (without oxygen) only yields 2 ATP and results in fermentation. In muscle cells, fermentation produces <b>lactic acid</b>; in yeast, it produces <b>alcohol and CO₂</b>.",
          "<b>Photosynthesis</b> occurs in the chloroplasts of plant and algae cells. It uses sunlight energy, CO₂, and water to produce glucose and oxygen: <b>6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂</b>. It has two stages: the light reactions (in the thylakoids) and the Calvin cycle (in the stroma).",
          "Respiration and photosynthesis are <b>complementary processes</b> — the products of one are the reactants of the other. Together they cycle carbon, oxygen, and energy through ecosystems.",
          "In the human body, cells that need large amounts of energy (like muscle and brain cells) have large numbers of <b>mitochondria</b>. During intense exercise, the body shifts to anaerobic metabolism, causing lactic acid buildup and the 'burning' sensation in muscles."
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
          "The <b>cell cycle</b> is the ordered sequence of events a cell goes through to grow and divide. It has two main phases: <b>interphase</b> (the longest phase — G1 growth, S DNA replication, G2 preparation) and the <b>mitotic phase</b> (division).",
          "<b>Mitosis</b> produces two genetically identical daughter cells with the full diploid (2n) chromosome number. It is used for growth, tissue repair, and asexual reproduction. The stages are remembered as <b>PMAT</b>: Prophase (chromosomes condense), Metaphase (line up in middle), Anaphase (pulled to poles), Telophase (two new nuclei form), followed by cytokinesis (cytoplasm splits).",
          "<b>Meiosis</b> is cell division for sexual reproduction. It consists of two rounds of division (Meiosis I and II) and produces four genetically unique haploid (n) cells — the gametes (sperm and egg). Genetic variation is created through <b>crossing over</b> during Meiosis I.",
          "Gametes must be <b>haploid</b> so that when an egg and sperm fuse during fertilization, the resulting zygote has the correct diploid number of chromosomes (e.g., humans: 23 + 23 = 46).",
          "<b>Cell cycle checkpoints</b> are quality-control points that ensure the cell is ready to proceed. If DNA is damaged or not properly replicated, the cycle pauses. Proteins called <b>tumor suppressors</b> (e.g., p53) help enforce these checkpoints.",
          "When checkpoints fail — due to mutations — cells can divide uncontrollably. This leads to <b>cancer</b>: a mass of abnormal cells (tumor) that may invade surrounding tissues or spread through the body (metastasis)."
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
          "<b>DNA (deoxyribonucleic acid)</b> is a double-stranded helix made of nucleotides. Each nucleotide has a sugar (deoxyribose), a phosphate group, and one of four nitrogenous bases: <b>Adenine (A), Thymine (T), Guanine (G), Cytosine (C)</b>. A always pairs with T, and G always pairs with C (complementary base pairing).",
          "The <b>central dogma</b> describes the flow of genetic information: <b>DNA → RNA → Protein</b>. DNA stores the instructions; RNA carries them; proteins carry out the work.",
          "<b>Transcription</b> occurs in the nucleus. An enzyme called RNA polymerase 'reads' a gene on the DNA and builds a complementary strand of <b>messenger RNA (mRNA)</b>. In RNA, uracil (U) replaces thymine (T). The mRNA then travels out of the nucleus to the ribosome.",
          "<b>Translation</b> occurs at the ribosome. The ribosome reads the mRNA three bases at a time — each trio is called a <b>codon</b>. Each codon codes for one amino acid. Transfer RNA (tRNA) brings the correct amino acid to the ribosome. The amino acids are linked into a chain — a protein.",
          "There are 64 possible codons for only 20 amino acids, so the genetic code is <b>redundant</b> (multiple codons can code for the same amino acid). The start codon (AUG, methionine) begins translation; stop codons (UAA, UAG, UGA) end it.",
          "<b>Mutations</b> are changes in the DNA sequence. A point mutation changes one base; a frameshift mutation adds or deletes bases, shifting the entire reading frame. Some mutations are harmless, some are beneficial, and others cause genetic diseases or cancer."
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
          "<b>Gregor Mendel</b>, the 'father of genetics,' discovered the basic principles of inheritance in the 1860s through careful experiments with pea plants. He tracked traits like seed color, shape, and plant height across generations.",
          "Each organism has two copies of each gene (one from each parent), called <b>alleles</b>. Alleles can be <b>dominant</b> (expressed when present, shown as a capital letter, e.g., B) or <b>recessive</b> (only expressed when two copies are present, shown as lowercase, e.g., b).",
          "<b>Genotype</b> is the actual genetic makeup of an organism (e.g., BB, Bb, or bb). <b>Phenotype</b> is the observable physical trait (e.g., brown eyes or blue eyes). Two organisms with different genotypes (BB and Bb) can have the same phenotype.",
          "<b>Homozygous</b> means both alleles are the same (BB or bb). <b>Heterozygous</b> means the alleles are different (Bb). A heterozygous individual is called a carrier if the recessive allele causes a disease.",
          "<b>Punnett squares</b> are grids used to predict the probability of offspring genotypes and phenotypes from a genetic cross. For example, a Bb × Bb cross gives a 3:1 dominant-to-recessive phenotype ratio.",
          "Mendel's <b>Law of Segregation</b> says the two alleles for a trait separate during gamete formation. His <b>Law of Independent Assortment</b> says genes for different traits are inherited independently of one another (when on different chromosomes)."
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
          "<b>Evolution</b> is the change in the heritable traits of a population over generations. It is not about individuals changing — it's about populations shifting over time as certain traits become more or less common.",
          "<b>Charles Darwin</b> proposed the theory of <b>natural selection</b> in 1859. His key observations: organisms produce more offspring than can survive, individuals vary in traits, some traits are heritable, and those with favorable traits survive and reproduce more, passing those traits on.",
          "<b>Natural selection</b> is driven by the environment. Traits that improve survival and reproduction in a given environment are 'selected for'; harmful traits are 'selected against.' Over many generations, the population becomes better adapted.",
          "<b>Adaptations</b> are inherited traits that improve an organism's fitness (survival and reproduction). Examples: camouflage coloring, venom, antibiotic resistance in bacteria, or the human opposable thumb.",
          "Evidence for evolution comes from multiple sources: <b>fossils</b> show change over time, <b>comparative anatomy</b> reveals homologous structures (same origin, different function — e.g., human arm and whale flipper), <b>embryology</b> shows shared early development, and <b>DNA comparisons</b> show relatedness at the molecular level.",
          "<b>Speciation</b> occurs when populations become reproductively isolated and diverge enough to form new species. Evolution does not have a goal or direction — it simply reflects which traits are most successful in the current environment."
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
          "<b>Ecology</b> is the scientific study of how organisms interact with each other and with their physical environment. It is organized into levels: individual → population → community → ecosystem → biosphere.",
          "Energy flows in one direction through ecosystems via <b>food chains</b> and <b>food webs</b>. <b>Producers</b> (plants) capture sunlight energy. <b>Primary consumers</b> (herbivores) eat plants. <b>Secondary consumers</b> (carnivores) eat herbivores. <b>Decomposers</b> break down dead matter and recycle nutrients.",
          "Only about <b>10% of energy</b> is transferred from one trophic level to the next — the rest is lost as heat. This is why food chains rarely have more than 4–5 levels, and why it takes many plants to support a few top predators.",
          "<b>Biogeochemical cycles</b> recycle matter through the living and non-living parts of ecosystems. The <b>carbon cycle</b> (photosynthesis/respiration), <b>nitrogen cycle</b> (bacteria fix N₂ into usable forms), and <b>water cycle</b> (evaporation/condensation/precipitation) are the most important.",
          "Species interact in many ways: <b>competition</b> (both harmed), <b>predation</b> (one benefits, one harmed), and <b>symbiosis</b> — mutualism (+/+, both benefit), commensalism (+/0, one benefits, other unaffected), and parasitism (+/−, one benefits, one harmed).",
          "Human activity is disrupting ecosystems through <b>habitat destruction, pollution, invasive species, and climate change</b> — leading to declining biodiversity and disrupted nutrient cycles worldwide."
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
          "<b>Anatomy</b> is the study of the structure of body parts and their relationships to one another. <b>Physiology</b> is the study of how those structures function. The two are inseparable — structure determines function.",
          "The human body is organized into <b>11 organ systems</b>: integumentary, skeletal, muscular, nervous, endocrine, cardiovascular, lymphatic/immune, respiratory, digestive, urinary, and reproductive. Each system has specific organs that work together toward a common function.",
          "<b>Anatomical position</b> is the standard reference: standing upright, facing forward, arms at the sides, palms facing forward. All directional terms are based on this position. Key pairs: <b>superior/inferior</b> (head/feet), <b>anterior/posterior</b> (front/back), <b>medial/lateral</b> (toward/away from midline), <b>proximal/distal</b> (closer/farther from the trunk).",
          "The body is divided into <b>body cavities</b>: the dorsal cavity (cranial + spinal) and ventral cavity (thoracic + abdominopelvic). These protect vital organs. The abdominopelvic cavity is further divided into nine regions for clinical reference.",
          "<b>Homeostasis</b> is the body's ability to maintain a stable internal environment despite external changes. Most homeostatic mechanisms work through <b>negative feedback</b>: a change is detected, a response reverses it, restoring balance (e.g., body temperature, blood sugar, blood pressure).",
          "<b>Positive feedback</b> amplifies a change rather than reversing it — used in specific situations like childbirth (uterine contractions intensify) and blood clotting. If homeostasis fails, disease or death can result."
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
          "The adult human skeleton has <b>206 bones</b> and performs five key functions: <b>support</b> (framework for the body), <b>protection</b> (skull protects brain, ribs protect heart/lungs), <b>movement</b> (levers for muscles), <b>blood cell production</b> (in red marrow), and <b>mineral storage</b> (calcium and phosphorus).",
          "The skeleton is divided into two parts: the <b>axial skeleton</b> (80 bones — skull, vertebral column, sternum, ribs) which forms the central axis; and the <b>appendicular skeleton</b> (126 bones — limbs, shoulder girdle, pelvic girdle) which allows movement.",
          "Bone is a living connective tissue. It has an outer layer of <b>compact bone</b> (dense, strong, forms the shaft) and an inner <b>spongy bone</b> (lightweight, porous, contains red marrow in certain bones). Bones are covered by a membrane called the <b>periosteum</b>.",
          "<b>Red bone marrow</b> produces red blood cells, white blood cells, and platelets through a process called <b>hematopoiesis</b>. In adults, red marrow is mainly in the sternum, vertebrae, ribs, and pelvis. <b>Yellow marrow</b> (fat) fills the shafts of long bones.",
          "<b>Cartilage</b> covers bone ends at joints, reducing friction. <b>Ligaments</b> are tough fibrous bands connecting bone to bone and stabilizing joints. Common joint types include hinge joints (elbow, knee) and ball-and-socket joints (shoulder, hip).",
          "Bone is constantly being remodeled by <b>osteoblasts</b> (build bone) and <b>osteoclasts</b> (break bone down). This balance is regulated by hormones and mechanical stress. <b>Osteoporosis</b> occurs when bone loss outpaces bone formation, making bones fragile and prone to fracture."
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
          "There are three types of muscle tissue: <b>skeletal muscle</b> (attached to bones, voluntary, striated), <b>cardiac muscle</b> (found only in the heart, involuntary, striated, self-stimulating), and <b>smooth muscle</b> (walls of hollow organs like the stomach and blood vessels, involuntary, non-striated).",
          "Skeletal muscle contraction is explained by the <b>sliding filament theory</b>: thin filaments (actin) slide over thick filaments (myosin) when myosin heads attach and pull actin inward, shortening the sarcomere (the basic unit of muscle contraction).",
          "Contraction is triggered by a nerve impulse that causes the release of <b>calcium ions</b> from the sarcoplasmic reticulum. Calcium binds to troponin, which exposes the actin binding sites for myosin. Each power stroke of the myosin head requires one <b>ATP</b> molecule.",
          "Skeletal muscles work in <b>antagonistic pairs</b> — when one contracts, the other relaxes. For example, the <b>biceps</b> flexes the forearm while the <b>triceps</b> extends it. Muscles can only pull (contract), never push.",
          "<b>Tendons</b> are strong connective tissue bands that attach muscle to bone, transmitting the pulling force. Tendons are different from ligaments (which connect bone to bone). Tendons are tough and have limited blood supply, making injuries slow to heal.",
          "Muscle strength and endurance improve with exercise through <b>hypertrophy</b> (increase in muscle fiber size). Lack of use leads to <b>atrophy</b> (muscle wasting). Muscle fibers are classified as slow-twitch (endurance, fatigue-resistant) and fast-twitch (powerful, tire quickly)."
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
          "The nervous system is divided into the <b>central nervous system (CNS)</b> — brain and spinal cord — which processes information, and the <b>peripheral nervous system (PNS)</b> — all nerves outside the CNS — which carries signals to and from the body.",
          "The PNS is further divided into the <b>somatic nervous system</b> (voluntary control of skeletal muscles) and the <b>autonomic nervous system</b> (involuntary control of organs). The autonomic system has <b>sympathetic</b> (fight-or-flight) and <b>parasympathetic</b> (rest-and-digest) divisions.",
          "<b>Neurons</b> are specialized cells that transmit electrical signals. They have a cell body, <b>dendrites</b> (receive signals), and an <b>axon</b> (sends signals). An electrical signal traveling down a neuron is called an <b>action potential</b>.",
          "At a <b>synapse</b>, the signal crosses the gap between neurons chemically. The axon terminal releases <b>neurotransmitters</b> (e.g., acetylcholine, dopamine, serotonin) which bind to receptors on the next neuron, either exciting or inhibiting it.",
          "A <b>reflex arc</b> is a rapid, automatic response that bypasses conscious thought. It travels: receptor → sensory neuron → spinal cord interneuron → motor neuron → effector (muscle/gland). This is why you pull your hand from a hot object before you feel the pain.",
          "The brain has three main regions: the <b>cerebrum</b> (largest — conscious thought, memory, senses, voluntary movement), <b>cerebellum</b> (balance and coordination), and <b>brainstem</b> (vital functions: breathing, heart rate, blood pressure)."
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
          "The cardiovascular system consists of the <b>heart</b>, <b>blood vessels</b>, and <b>blood</b>. Its functions include transporting oxygen, nutrients, hormones, and wastes; regulating temperature and pH; and protecting against disease.",
          "The heart has four chambers: the <b>right atrium</b> (receives oxygen-poor blood from the body) → <b>right ventricle</b> (pumps to lungs) → <b>left atrium</b> (receives oxygenated blood from lungs) → <b>left ventricle</b> (pumps to the body). Valves prevent backflow.",
          "Blood travels in two circuits: the <b>pulmonary circuit</b> (right heart → lungs → left heart) picks up oxygen and drops off CO₂. The <b>systemic circuit</b> (left heart → body → right heart) delivers oxygen and picks up CO₂ and wastes.",
          "<b>Arteries</b> carry blood away from the heart at high pressure (thick, muscular walls). <b>Veins</b> return blood to the heart at low pressure (have valves to prevent backflow). <b>Capillaries</b> are the site of all exchange — oxygen, nutrients, CO₂, and wastes cross their thin walls.",
          "Blood is made of <b>plasma</b> (liquid, ~55%) and formed elements: <b>red blood cells/RBCs</b> (carry O₂ via hemoglobin), <b>white blood cells/WBCs</b> (immune defense), and <b>platelets</b> (clotting). Blood type (ABO and Rh) is determined by antigens on RBC surfaces.",
          "<b>Blood pressure</b> is the force of blood on vessel walls (systolic/diastolic, e.g., 120/80 mmHg). High blood pressure (hypertension) strains the heart and vessels; low pressure may cause insufficient tissue perfusion. The heart's rhythm is set by the <b>sinoatrial (SA) node</b>, the natural pacemaker."
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
          "The respiratory system's primary role is <b>gas exchange</b>: bringing oxygen into the blood and removing carbon dioxide. It also helps regulate blood pH (since CO₂ is acidic) and is involved in speech and smell.",
          "The path of air: <b>nose/mouth</b> (filters, warms, humidifies) → <b>pharynx</b> (throat) → <b>larynx</b> (voice box, contains vocal cords) → <b>trachea</b> (windpipe, held open by C-shaped cartilage rings) → <b>bronchi</b> → <b>bronchioles</b> → <b>alveoli</b>.",
          "<b>Alveoli</b> are tiny air sacs clustered like grapes at the end of bronchioles. They have extremely thin walls (one cell thick) and are surrounded by capillaries. Their enormous total surface area (~70 m²) allows rapid gas exchange by <b>diffusion</b>.",
          "During <b>inhalation</b>, the diaphragm contracts and flattens, the chest cavity expands, and air is drawn in (lower pressure). During <b>exhalation</b>, the diaphragm relaxes, the chest recoils, and air is pushed out. At rest this is passive; during exercise, accessory muscles assist.",
          "Gas exchange in the lungs: <b>oxygen</b> diffuses from the alveoli (high O₂) into the blood (low O₂); <b>carbon dioxide</b> diffuses from the blood (high CO₂) into the alveoli (low CO₂) to be exhaled. This works entirely by simple diffusion down concentration gradients.",
          "The respiratory rate and depth are controlled by the <b>medulla oblongata</b> (brainstem) based on blood CO₂ levels. Conditions like asthma (bronchospasm), pneumonia (fluid in alveoli), and COPD reduce gas exchange efficiency and are major clinical concerns."
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
          "Digestion is the process of breaking down food into small molecules the body can absorb. It has two types: <b>mechanical digestion</b> (physical breakdown — chewing, churning) and <b>chemical digestion</b> (enzyme-driven breakdown of bonds in macromolecules).",
          "The digestive path: <b>mouth</b> (chewing + salivary amylase starts carb digestion) → <b>esophagus</b> (pushes food down by peristalsis) → <b>stomach</b> (HCl + pepsin digest protein, churns food into chyme) → <b>small intestine</b> (main digestion and absorption) → <b>large intestine</b> (water absorption, feces) → rectum → anus.",
          "The <b>small intestine</b> (about 6 meters long) is the primary site of both digestion and nutrient absorption. Its lining has <b>villi</b> and <b>microvilli</b> (brush border) that enormously increase surface area. Nutrients (amino acids, glucose, fatty acids) are absorbed into blood capillaries and lymphatic vessels.",
          "<b>Accessory organs</b> aid digestion: the <b>liver</b> produces bile (stored in the gallbladder) which emulsifies fats into small droplets. The <b>pancreas</b> secretes digestive enzymes (amylase, lipase, proteases) and bicarbonate (to neutralize stomach acid) into the small intestine.",
          "Key digestive enzymes: <b>amylase</b> (breaks down starch), <b>pepsin</b> (digests proteins in the stomach), <b>lipase</b> (digests fats), <b>trypsin/chymotrypsin</b> (proteases from the pancreas). Each enzyme works best at a specific pH.",
          "The <b>large intestine</b> (~1.5 meters) absorbs water and electrolytes, solidifying the remaining material into feces. It houses billions of beneficial gut bacteria that produce vitamins (K, B12), aid digestion, and protect against pathogens."
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
          "The urinary system eliminates metabolic waste from the blood, regulates fluid and electrolyte balance, controls blood pH, and helps regulate blood pressure. The main organs are the two <b>kidneys</b>, ureters, urinary bladder, and urethra.",
          "Each kidney contains about one million <b>nephrons</b> — the functional filtering units. Each nephron has a glomerulus (capillary ball for filtration), Bowman's capsule, and a series of tubules that reabsorb useful substances and secrete wastes.",
          "The kidneys process blood in three steps: <b>filtration</b> (blood is filtered under pressure at the glomerulus), <b>reabsorption</b> (useful substances like glucose, water, and ions are taken back into the blood), and <b>secretion</b> (additional wastes like drugs and H⁺ ions are added to the filtrate).",
          "The main waste product excreted by the kidneys is <b>urea</b>, formed from the breakdown of amino acids (protein metabolism). Other wastes include creatinine (from muscle) and uric acid (from nucleotides). These are dissolved in water to form urine.",
          "Urine flows from kidneys → <b>ureters</b> → <b>urinary bladder</b> (storage, holds ~500 mL) → <b>urethra</b> → out of the body. Urination (micturition) is controlled by voluntary and involuntary sphincters.",
          "The kidneys regulate <b>blood pressure</b> via the renin-angiotensin system (they release renin when pressure drops). They also activate <b>Vitamin D</b>, produce <b>erythropoietin</b> (stimulates red blood cell production), and fine-tune blood pH by excreting or retaining H⁺ and bicarbonate."
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
          "The immune system is the body's defense against <b>pathogens</b> (bacteria, viruses, fungi, parasites) and abnormal cells (like cancer cells). It has two main branches: <b>innate (non-specific)</b> immunity and <b>adaptive (specific)</b> immunity.",
          "<b>Innate immunity</b> is the body's first and second line of defense. First line: physical barriers like <b>skin</b> (prevents entry), mucus (traps pathogens), and stomach acid. Second line: <b>inflammation</b> (brings blood flow and immune cells to the area), <b>fever</b> (slows pathogen growth), and <b>phagocytes</b> (neutrophils and macrophages that engulf and destroy invaders).",
          "<b>Adaptive immunity</b> is slow (takes days) but highly specific and has <b>memory</b>. It is triggered by <b>antigens</b> — molecules on the surface of pathogens that the immune system recognizes as foreign. Adaptive immunity is carried out by <b>lymphocytes</b> (B cells and T cells).",
          "<b>B cells</b> produce <b>antibodies</b> — Y-shaped proteins that bind to specific antigens, marking them for destruction or neutralizing them. <b>T cells</b> come in two types: <b>cytotoxic T cells</b> (directly kill infected cells) and <b>helper T cells</b> (coordinate the immune response).",
          "After an infection is cleared, some B and T cells become <b>memory cells</b> that remain in the body for years. On re-exposure to the same pathogen, the response is <b>faster and stronger</b> — this is the basis of <b>immunity</b> and how <b>vaccines</b> work.",
          "<b>Vaccines</b> introduce a harmless form of an antigen (killed pathogen, weakened virus, or just a protein) to train the immune system without causing disease. <b>Autoimmune diseases</b> occur when the immune system mistakenly attacks the body's own tissues (e.g., lupus, rheumatoid arthritis, Type 1 diabetes)."
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
          "The <b>endocrine system</b> is a collection of glands that produce and secrete <b>hormones</b> — chemical messengers that travel through the bloodstream to target organs and regulate a wide range of body functions including growth, metabolism, reproduction, and mood.",
          "Major endocrine glands: <b>hypothalamus</b> (links nervous and endocrine systems), <b>pituitary</b> (master gland — controls other glands), <b>thyroid</b> (regulates metabolism), <b>adrenal glands</b> (stress hormones, e.g., adrenaline and cortisol), <b>pancreas</b> (blood sugar), <b>gonads</b> (sex hormones).",
          "The <b>pancreas</b> regulates blood glucose: <b>insulin</b> (from beta cells) lowers blood sugar by helping cells absorb glucose after a meal. <b>Glucagon</b> (from alpha cells) raises blood sugar between meals by triggering the liver to release stored glucose. This balance is a classic example of negative feedback.",
          "Hormones work by binding to specific <b>receptors</b> on or inside target cells. Only cells with the right receptor respond. Some hormones (like protein-based hormones) bind to surface receptors and trigger second messengers; steroid hormones enter the cell and directly affect gene expression.",
          "The <b>reproductive system</b> produces gametes (egg and sperm) for sexual reproduction and secretes sex hormones. In females: <b>estrogen and progesterone</b> regulate the menstrual cycle and pregnancy. In males: <b>testosterone</b> drives sperm production and secondary sex characteristics.",
          "Compared to the nervous system, hormone signals are <b>slower to act</b> (seconds to hours) but have <b>longer-lasting, body-wide effects</b>. Many body processes require both systems working together — for example, the stress response involves both the nervous system (adrenaline release) and the endocrine system (cortisol from adrenal cortex)."
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
          "<b>Chemistry</b> is the branch of science that studies matter — what it is made of, its properties, how it changes, and the energy involved in those changes. Chemistry underlies all other sciences, especially biology and medicine.",
          "<b>Matter</b> is anything that has mass and takes up space. It is made up of atoms and exists in four states: <b>solid</b> (fixed shape and volume), <b>liquid</b> (fixed volume, variable shape), <b>gas</b> (variable shape and volume), and <b>plasma</b> (ionized high-energy state).",
          "<b>Physical properties</b> (color, density, melting point, boiling point) can be measured without changing the substance. <b>Chemical properties</b> describe how a substance reacts — flammability, reactivity with acid, etc. Understanding both helps identify and use substances safely.",
          "A <b>physical change</b> alters the form or state of matter without changing its chemical identity (e.g., melting, boiling, cutting). A <b>chemical change</b> (chemical reaction) produces one or more new substances with new properties (e.g., burning, rusting, cooking).",
          "<b>Pure substances</b> are either <b>elements</b> (one type of atom, can't be broken down) or <b>compounds</b> (two or more elements chemically joined, e.g., H₂O). <b>Mixtures</b> are combinations of substances not chemically joined — they can be <b>homogeneous</b> (uniform, e.g., saltwater) or <b>heterogeneous</b> (uneven, e.g., sand and water).",
          "The <b>scientific method</b> is essential in chemistry: observe → hypothesize → experiment → analyze → conclude. Accurate <b>measurement</b> using SI units (grams, liters, meters, Kelvin) and significant figures ensures results are reproducible and meaningful."
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
          "The <b>atom</b> is the smallest unit of matter that retains the properties of an element. All matter is composed of atoms. Atoms are made of three subatomic particles: <b>protons</b> (positive, in nucleus), <b>neutrons</b> (neutral, in nucleus), and <b>electrons</b> (negative, orbiting nucleus).",
          "The <b>nucleus</b> is the small, dense core of the atom containing protons and neutrons. The <b>atomic number</b> equals the number of protons and uniquely identifies the element. The <b>mass number</b> = protons + neutrons. In a neutral atom, the number of electrons equals the number of protons.",
          "<b>Electrons</b> occupy <b>energy levels</b> (shells) around the nucleus. The first shell holds up to 2 electrons, the second holds up to 8, the third up to 18. The <b>valence electrons</b> (outermost shell) determine chemical behavior and how atoms bond.",
          "<b>Isotopes</b> are atoms of the same element that have the same number of protons but different numbers of neutrons (and therefore different mass numbers). For example, Carbon-12 has 6 neutrons; Carbon-14 has 8. Isotopes of an element behave the same chemically.",
          "Some isotopes are <b>radioactive</b> — their unstable nuclei decay by emitting radiation (alpha, beta, or gamma). Radioactive isotopes have important medical uses: Carbon-14 for dating, Iodine-131 for thyroid treatment, Technetium-99m for imaging.",
          "The <b>electron cloud model</b> (modern atomic model) describes electrons as existing in regions of probability called orbitals (s, p, d, f). Unlike the older Bohr model of circular orbits, orbitals describe where an electron is most likely to be found."
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
          "The <b>periodic table</b> organizes all known elements in order of increasing <b>atomic number</b>. It was developed by Dmitri Mendeleev in 1869 and has been refined since. Currently there are 118 confirmed elements.",
          "Elements are arranged in <b>periods</b> (horizontal rows) and <b>groups/families</b> (vertical columns). Elements in the same group have the same number of valence electrons and therefore similar chemical properties.",
          "The table is divided into three main categories: <b>metals</b> (left and center — shiny, conductive, malleable), <b>nonmetals</b> (upper right — poor conductors, often gases or brittle solids), and <b>metalloids</b> (staircase boundary — intermediate properties, e.g., silicon used in semiconductors).",
          "Key groups: <b>Group 1 — Alkali metals</b> (very reactive, 1 valence e⁻, e.g., Na, K); <b>Group 2 — Alkaline earth metals</b> (less reactive, 2 valence e⁻); <b>Group 17 — Halogens</b> (highly reactive nonmetals, 7 valence e⁻, e.g., Cl, F); <b>Group 18 — Noble gases</b> (full outer shell, unreactive, e.g., He, Ne).",
          "<b>Periodic trends</b> show predictable changes across and down the table: atomic radius increases going down and left; electronegativity and ionization energy increase going up and to the right. These trends arise directly from atomic structure.",
          "Many elements are biologically critical: <b>O, C, H, N</b> make up most of the body; <b>Ca and P</b> are in bones; <b>Na and K</b> control nerve signals; <b>Fe</b> is in hemoglobin; <b>I</b> is needed for thyroid function. Knowing their periodic position predicts their reactivity."
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
          "Atoms form bonds to achieve a more stable electron configuration. The <b>octet rule</b> states that atoms tend to gain, lose, or share electrons until they have 8 electrons in their outermost shell (like a noble gas). Hydrogen is an exception — it needs only 2.",
          "<b>Ionic bonds</b> form when electrons are completely <b>transferred</b> from one atom to another, usually between a metal and a nonmetal. The atom that loses electrons becomes a positively charged <b>cation</b>; the one that gains becomes a negatively charged <b>anion</b>. The oppositely charged ions attract each other strongly.",
          "Ionic compounds form crystal lattice structures, have high melting points, and conduct electricity when dissolved in water (they form electrolytes). Example: NaCl (table salt) — Na⁺ and Cl⁻.",
          "<b>Covalent bonds</b> form when two nonmetal atoms <b>share</b> electron pairs. A <b>single bond</b> shares 1 pair (H₂), a <b>double bond</b> shares 2 pairs (O₂), a <b>triple bond</b> shares 3 pairs (N₂). Covalent compounds are usually gases or liquids at room temp with lower melting points.",
          "<b>Polar covalent bonds</b> form when electrons are shared unevenly because one atom pulls harder (higher electronegativity). Water (H₂O) has polar covalent bonds — the O pulls electrons more strongly, giving it partial charges. This polarity is responsible for water's special properties.",
          "<b>Metallic bonds</b> occur in pure metals, where valence electrons are delocalized — they flow freely among all the metal atoms ('sea of electrons'). This explains why metals conduct electricity and heat, are malleable (bendable), and have a shiny luster."
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
          "A <b>chemical reaction</b> is a process in which the atoms of one or more substances are rearranged to form different substances. The starting substances are <b>reactants</b>; the new substances formed are <b>products</b>. Reactions are represented by a balanced <b>chemical equation</b>.",
          "The <b>law of conservation of mass</b> states that matter is neither created nor destroyed in a chemical reaction — atoms are only rearranged. Therefore, a balanced equation must have equal numbers of each type of atom on both sides of the arrow.",
          "Main types of reactions: <b>synthesis</b> (A + B → AB, two things combine), <b>decomposition</b> (AB → A + B, one thing breaks apart), <b>single replacement</b> (A + BC → AC + B), <b>double replacement</b> (AB + CD → AD + CB, ions swap), and <b>combustion</b> (fuel + O₂ → CO₂ + H₂O + heat).",
          "Evidence that a reaction has occurred: <b>color change</b>, <b>gas production</b> (bubbles or odor), <b>precipitate formation</b> (insoluble solid forms in solution), <b>temperature change</b> (exothermic reactions release heat; endothermic reactions absorb heat), or <b>light emission</b>.",
          "<b>Exothermic reactions</b> release energy (heat, light) — products have less energy than reactants. Examples: combustion, respiration. <b>Endothermic reactions</b> absorb energy — products have more energy than reactants. Examples: photosynthesis, cooking an egg.",
          "<b>Reaction rates</b> can be increased by raising temperature, increasing concentration, reducing particle size (more surface area), or adding a <b>catalyst</b> — a substance that speeds up a reaction without being consumed. Biological catalysts (enzymes) are critical in the body."
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
          "The <b>mole</b> is a unit used to count extremely large numbers of particles. One mole = <b>6.022 × 10²³</b> particles (atoms, molecules, ions, etc.) — this is <b>Avogadro's number</b>. Just like a 'dozen' always means 12, a 'mole' always means 6.022 × 10²³.",
          "The <b>molar mass</b> of a substance is the mass of one mole of that substance, expressed in <b>grams per mole (g/mol)</b>. For an element, it equals the atomic mass from the periodic table. For a compound, add up the molar masses of all atoms (e.g., H₂O: 2×1 + 16 = 18 g/mol).",
          "You can convert between <b>moles, mass, and number of particles</b> using: mass (g) ÷ molar mass (g/mol) = moles; moles × Avogadro's number = number of particles. These conversions are the foundation of all quantitative chemistry.",
          "<b>Stoichiometry</b> is the calculation of the quantities of reactants and products in a chemical reaction. It relies on the <b>mole ratios</b> given by the coefficients in a balanced equation. For example, 2H₂ + O₂ → 2H₂O tells you 2 mol H₂ reacts with 1 mol O₂ to produce 2 mol H₂O.",
          "In real reactions, the <b>limiting reactant</b> is the substance that runs out first and therefore limits how much product can be made. The other reactant is in excess. Identifying the limiting reactant is key to calculating actual yield.",
          "Stoichiometry has important applications in nursing and pharmacy: calculating <b>drug dosages</b>, IV fluid concentrations, and understanding how much of a drug the body needs to reach a therapeutic level all rely on mole-based calculations."
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
          "The <b>kinetic molecular theory</b> states that all particles of matter are in constant, random motion. The faster they move, the higher the temperature. In solids, particles vibrate in place; in liquids, they move around each other; in gases, they move freely and fast.",
          "Matter changes state when enough energy is added or removed: <b>melting</b> (solid→liquid), <b>freezing</b> (liquid→solid), <b>evaporation</b> (liquid→gas), <b>condensation</b> (gas→liquid), <b>sublimation</b> (solid→gas, e.g., dry ice). During state changes, temperature remains constant while energy breaks or forms intermolecular forces.",
          "<b>Boyle's Law</b>: At constant temperature, pressure (P) and volume (V) of a gas are inversely proportional — if you squeeze a gas (↓V), the pressure increases (↑P). Equation: P₁V₁ = P₂V₂. Example: lungs expand to lower pressure and draw air in.",
          "<b>Charles's Law</b>: At constant pressure, volume (V) and temperature (T in Kelvin) of a gas are directly proportional — heating a gas makes it expand. Equation: V₁/T₁ = V₂/T₂. Example: a balloon shrinks in cold weather.",
          "The <b>combined gas law</b> merges Boyle's and Charles's: P₁V₁/T₁ = P₂V₂/T₂. The <b>ideal gas law</b> is PV = nRT (where n = moles, R = gas constant). These laws describe how real gases behave under most conditions.",
          "These gas laws have direct medical relevance: <b>mechanical ventilators</b> use pressure changes to push air into lungs; <b>oxygen tanks</b> store gas under high pressure; <b>hyperbaric oxygen therapy</b> increases dissolved O₂ by raising pressure (Boyle's/Henry's law)."
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
          "A <b>solution</b> is a homogeneous (uniform) mixture in which a <b>solute</b> (the substance being dissolved) is dispersed throughout a <b>solvent</b> (the dissolving medium). The solvent is present in the larger amount. Solutions can be liquid, gas (air), or solid (alloys).",
          "<b>Water</b> is called the 'universal solvent' because its polarity allows it to dissolve a wide variety of ionic and polar substances. When an ionic compound like NaCl dissolves, water molecules surround and pull apart the ions — this is called <b>hydration</b>.",
          "The principle <b>'like dissolves like'</b> means polar solvents dissolve polar/ionic solutes, and nonpolar solvents dissolve nonpolar solutes. For example, oil (nonpolar) does not dissolve in water (polar) — that's why oil and water don't mix.",
          "<b>Concentration</b> measures how much solute is dissolved per amount of solution. <b>Molarity (M)</b> = moles of solute ÷ liters of solution (mol/L). A 1 M solution contains 1 mole of solute in 1 liter. Other units: percent by mass, parts per million (ppm) for very dilute solutions.",
          "<b>Solubility</b> is the maximum amount of solute that dissolves in a given amount of solvent at a specific temperature. A <b>saturated solution</b> holds the maximum. <b>Temperature</b> usually increases solubility of solids in liquid; for gases, higher temperature decreases solubility (gases escape as liquid warms).",
          "In medicine, solutions are critically important: IV fluids must be <b>isotonic</b> (~0.9% NaCl or 5% dextrose) to match body fluid concentration. Drug concentrations are expressed in mg/mL or mg/dL. Understanding molarity is essential for dilutions and mixing medications accurately."
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
          "An <b>acid</b> is a substance that donates hydrogen ions (H⁺) in water — it increases the H⁺ concentration. A <b>base</b> (alkali) accepts H⁺ ions or donates OH⁻ ions, decreasing H⁺ concentration. Strong acids/bases fully dissociate; weak ones partially dissociate.",
          "The <b>pH scale</b> (0–14) measures the concentration of H⁺ ions in a solution. <b>pH 7</b> is neutral (pure water). <b>Below 7 is acidic</b> (more H⁺), <b>above 7 is basic</b> (less H⁺). Each unit change represents a <b>10-fold change</b> in H⁺ concentration — pH 3 is 10× more acidic than pH 4.",
          "Common acids: hydrochloric acid (HCl, stomach acid), acetic acid (vinegar), carbonic acid (blood pH regulation). Common bases: sodium hydroxide (NaOH, drain cleaner), sodium bicarbonate (baking soda, antacid), ammonia (cleaning products).",
          "<b>Neutralization</b> occurs when an acid and a base react: H⁺ + OH⁻ → H₂O. The products are water and a salt. The pH moves toward neutral. Example: HCl + NaOH → NaCl + H₂O. This principle is used in antacids (base neutralizes stomach acid).",
          "<b>Indicators</b> are substances that change color at specific pH ranges (e.g., litmus paper turns red in acid, blue in base). pH meters give more precise readings. Used in labs and clinically to quickly test fluid pH.",
          "<b>Buffers</b> are solutions that resist changes in pH when small amounts of acid or base are added. They contain a weak acid and its conjugate base. Blood is maintained at pH <b>7.35–7.45</b> by the bicarbonate buffer system (H₂CO₃/HCO₃⁻). A blood pH outside 6.8–7.8 is fatal — the kidneys and lungs work together to keep it in range."
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
          "<b>Organic chemistry</b> is the study of carbon-containing compounds. Carbon is the backbone of life — it forms millions of compounds because it can form <b>four covalent bonds</b>, bond to other carbons (chains, branches, rings), and bond to many other elements.",
          "<b>Hydrocarbons</b> contain only carbon and hydrogen. They are the simplest organic compounds. <b>Alkanes</b> have only single C–C bonds (e.g., methane CH₄, propane C₃H₈); <b>alkenes</b> have at least one C=C double bond; <b>alkynes</b> have a C≡C triple bond. Double and triple bonds make molecules more reactive.",
          "<b>Functional groups</b> are specific arrangements of atoms within molecules that give the molecule characteristic chemical properties. The same functional group behaves similarly regardless of the size of the carbon chain attached.",
          "Key functional groups: <b>–OH (hydroxyl)</b> = alcohol (e.g., ethanol); <b>–COOH (carboxyl)</b> = carboxylic acid (e.g., acetic acid); <b>–NH₂ (amino)</b> = amine (e.g., amino acids); <b>–C=O (carbonyl)</b> = aldehyde or ketone; <b>–COO– (ester linkage)</b> = ester or lipid bond.",
          "<b>Isomers</b> are compounds with the same molecular formula but different structural arrangements. Because carbon can bond in so many ways, isomers can have very different properties — including different biological activities and drug effects.",
          "Organic compounds are the basis of all <b>biomolecules</b> and <b>pharmaceuticals</b>. Understanding functional groups is key to pharmacology: the –OH groups of alcohols affect solubility; the –COOH groups in aspirin make it acidic; many drugs are modified to change their absorption or stability in the body."
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
          "<b>Biochemistry</b> is the chemistry of life — the study of the chemical processes, reactions, and molecules that occur in living organisms. It bridges chemistry and biology and is essential for understanding medicine, nutrition, pharmacology, and disease.",
          "The four major <b>biological macromolecules</b> are all carbon-based polymers (large repeating chain molecules): <b>carbohydrates</b> (monosaccharide monomers, energy/structure), <b>lipids</b> (fatty acids and glycerol, membranes and energy storage), <b>proteins</b> (amino acid chains, diverse functions), <b>nucleic acids</b> (nucleotide chains, genetic information).",
          "<b>Enzymes</b> are biological catalysts — almost always proteins — that dramatically speed up chemical reactions by lowering <b>activation energy</b> (the energy needed to start the reaction). Enzymes are highly specific: each enzyme binds only to its <b>substrate</b> (the reactant) at the active site, like a lock and key.",
          "Enzyme activity is affected by temperature, pH, and inhibitors. Each enzyme has an <b>optimal temperature and pH</b>. Too much heat or extreme pH causes <b>denaturation</b> (the enzyme loses its shape and stops working). This is why fever above a certain point is dangerous.",
          "<b>Metabolism</b> is the sum of all chemical reactions in the body. <b>Catabolism</b> breaks down large molecules into smaller ones and releases energy (e.g., digestion of food, cellular respiration). <b>Anabolism</b> builds larger molecules from smaller ones using energy (e.g., protein synthesis, building muscle, making DNA).",
          "Many <b>drugs and toxins</b> work by interfering with enzymes: antibiotics inhibit bacterial enzymes; aspirin inhibits COX enzymes (reducing inflammation); cyanide blocks cytochrome c oxidase in the electron transport chain. Understanding biochemistry is fundamental to pharmacology and clinical practice."
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
          "<b>Nuclear chemistry</b> deals with changes in the nucleus of an atom, as opposed to regular chemistry which involves electron changes. Nuclear reactions involve enormous amounts of energy — far greater than chemical reactions — because they involve changes to nuclear forces.",
          "<b>Radioactivity</b> is the spontaneous emission of particles or energy from the nucleus of an unstable atom as it decays toward a more stable form. There are three main types: <b>alpha (α) radiation</b> (2 protons + 2 neutrons, low penetration), <b>beta (β) radiation</b> (an electron, moderate penetration), and <b>gamma (γ) radiation</b> (high-energy electromagnetic waves, most penetrating, requires lead shielding).",
          "The <b>half-life</b> of a radioactive isotope is the time it takes for half of the atoms in a sample to decay. Half-lives range from fractions of a second to billions of years. After one half-life, 50% remains; after two, 25%; after three, 12.5% — and so on.",
          "<b>Nuclear fission</b> is the splitting of a heavy nucleus (e.g., uranium-235) into two smaller nuclei, releasing a tremendous amount of energy and neutrons that can trigger a chain reaction. This is the basis of nuclear power plants and atomic bombs.",
          "<b>Nuclear fusion</b> is the joining of two light nuclei (e.g., hydrogen isotopes) to form a heavier nucleus, releasing even more energy than fission. This is what powers the sun and stars. Fusion produces far more energy and less radioactive waste than fission.",
          "Radioactive isotopes have important <b>medical applications</b>: <b>Carbon-14</b> for radiocarbon dating; <b>Iodine-131</b> to treat thyroid cancer (thyroid absorbs iodine); <b>Technetium-99m</b> for diagnostic imaging (PET and SPECT scans); <b>Cobalt-60</b> for radiation therapy to destroy tumors. The goal is to target specific tissues while minimizing damage to healthy cells."
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
