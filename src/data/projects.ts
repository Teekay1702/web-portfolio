import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    num: '01',
    title: 'PowerFlow',
    type: 'Software project',
    // TODO: Update this summary and tags with the final PowerFlow project details.
    desc: 'A completed software project focused on creating a practical, reliable digital experience.',
    tags: ['Project', 'GitHub'],
    accent: 'violet',
    // GitHub repository for the completed PowerFlow project.
    link: 'https://github.com/Teekay1702/powerflow.git',
  },
  {
    num: '02',
    title: 'TrendLoop',
    type: 'Mobile application',
    desc: 'A Flutter mobile app for a peer-to-peer retail marketplace, with separate buyer and seller experiences.',
    tags: ['Flutter', 'Dart', 'Provider'],
    accent: 'mint',
    // GitHub repository for the completed TrendLoop project.
    link: 'https://github.com/Teekay1702/trendloop.git',
  },
  {
    num: '03',
    title: 'Community Hub',
    type: 'Software project',
    // TODO: Update this summary and tags with the final Community Hub project details.
    desc: 'A completed community-focused software project available to explore on GitHub.',
    tags: ['Project', 'GitHub'],
    accent: 'amber',
    // GitHub repository for the completed Community Hub project.
    link: 'https://github.com/Teekay1702/Community-Hub.git',
  },

  // TODO: Duplicate a project object above to add another completed project.
  // Remember to use a unique `num`, update the project information, and add its `link`.
];
