import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';

type TeamMemberProps = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

function TeamMember({ name, role, image, linkedin }: TeamMemberProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="hover:border-gradient-to-r flex flex-col items-center rounded-lg border border-transparent bg-white from-blue-500 to-cyan-400 p-6 shadow-lg transition duration-300 hover:shadow-2xl"
    >
      <div className="border-gradient-to-br relative mb-4 h-28 w-28 overflow-hidden rounded-full border-4 from-blue-600 to-cyan-300">
        <img
          src={image}
          alt={`${name}'s photo`}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-800">{name}</h3>
      <p className="text-gray-500">{role}</p>
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 transform transition-transform duration-300 hover:scale-110"
      >
        <FaLinkedin className="text-3xl text-blue-700 hover:text-blue-800" />
      </a>
    </motion.div>
  );
}

function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Amr Medhat',
      role: 'Cloud Architect',
      image: './amr.png',
      linkedin: 'https://www.linkedin.com/in/amrmamer/',
    },
    {
      name: 'Mustafa Ashraf',
      role: 'Web Developer',
      image: './mustafa.png',
      linkedin: 'https://www.linkedin.com/in/mustafaashrafsaad/',
    },
    {
      name: 'Mohamed Atwan',
      role: 'AI Engineer',
      image: './mohamed.png',
      linkedin: 'https://www.linkedin.com/in/mo7amed3twan/',
    },
    {
      name: 'Khalid Omar',
      role: 'Data Analyst',
      image: './khalid.png',
      linkedin: 'https://www.linkedin.com/in/khalid-sedik/',
    },
  ];

  return (
    <section className="bg-gradient-to-b py-16" id="team">
      <div className="mx-auto max-w-[100rem] px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-5xl font-bold text-gray-800"
        >
          Meet The <span className="text-blue-600">Team</span>
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <TeamMember {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default MeetTheTeam;
