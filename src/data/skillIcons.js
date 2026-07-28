import {
  SiGo,
  SiPython,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiFastapi,
  SiFirebase,
  SiSupabase,
  SiGithubactions,
  SiDocker,
  SiRailway,
} from 'react-icons/si';
import { FaBrain, FaDatabase, FaCogs, FaServer } from 'react-icons/fa';

// Real product/tech names with an available logo.
const skillIconMap = {
  Go: SiGo,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  'React/TypeScript': SiReact,
  JavaScript: SiJavascript,
  'Node.js': SiNodedotjs,
  FastAPI: SiFastapi,
  'Firebase/Firestore': SiFirebase,
  Supabase: SiSupabase,
  'GitHub Actions': SiGithubactions,
  Docker: SiDocker,
  Railway: SiRailway,
};

// Concept/methodology strings have no real product logo — fall back to a
// consistent icon per skill category instead.
const categoryFallbackIcons = {
  'GenAI & LLM': FaBrain,
  'Backend & Data': FaDatabase,
  'Frontend & Tools': FaCogs,
  Infrastructure: FaServer,
};

export function getSkillIcon(category, skillName) {
  return skillIconMap[skillName] || categoryFallbackIcons[category] || FaCogs;
}
