export const brackets04 = {
  participant: [
    {
      id: 0,
      tournament_id: 0,
      name: "Team 1",
    },
    {
      id: 1,
      tournament_id: 0,
      name: "Team 2",
    },
    {
      id: 2,
      tournament_id: 0,
      name: "Team 3",
    },
    {
      id: 3,
      tournament_id: 0,
      name: "Team 4",
    },
  ],
  stage: [
    {
      id: 0,
      tournament_id: 0,
      name: "Example",
      type: "double_elimination",
      number: 1,
      settings: {
        size: 16,
        seedOrdering: ["natural", "natural", "reverse_half_shift", "reverse"],
        grandFinal: "double",
        matchesChildCount: 0,
      },
    },
  ],
  group: [
    {
      id: 0,
      stage_id: 0,
      number: 1,
    },
    {
      id: 1,
      stage_id: 0,
      number: 2,
    },
    {
      id: 2,
      stage_id: 0,
      number: 3,
    },
  ],
  round: [
    {
      id: 0,
      number: 1,
      stage_id: 0,
      group_id: 0,
    },
    {
      id: 1,
      number: 2,
      stage_id: 0,
      group_id: 0,
    },
    {
      id: 2,
      number: 3,
      stage_id: 0,
      group_id: 0,
    },
    {
      id: 3,
      number: 4,
      stage_id: 0,
      group_id: 0,
    },
    {
      id: 4,
      number: 1,
      stage_id: 0,
      group_id: 1,
    },
    {
      id: 5,
      number: 2,
      stage_id: 0,
      group_id: 1,
    },
    {
      id: 6,
      number: 3,
      stage_id: 0,
      group_id: 1,
    },
    {
      id: 7,
      number: 4,
      stage_id: 0,
      group_id: 1,
    },
    {
      id: 8,
      number: 5,
      stage_id: 0,
      group_id: 1,
    },
    {
      id: 9,
      number: 6,
      stage_id: 0,
      group_id: 1,
    },
    {
      id: 10,
      number: 1,
      stage_id: 0,
      group_id: 2,
    },
    {
      id: 11,
      number: 2,
      stage_id: 0,
      group_id: 2,
    },
  ],
  match: [
    {
      id: 0,
      number: 1,
      stage_id: 0,
      group_id: 0,
      round_id: 0,
      child_count: 0,
      status: 4,
      opponent1: {
        id: 0,
        position: 1,
      },
      opponent2: {
        id: 1,
        position: 2,
      },
    },
    {
      id: 1,
      number: 2,
      stage_id: 0,
      group_id: 0,
      round_id: 0,
      child_count: 0,
      status: 3,
      opponent1: {
        id: 2,
        position: 3,
      },
      opponent2: {
        id: 3,
        position: 4,
      },
    },
    {
      id: 2,
      number: 3,
      stage_id: 0,
      group_id: 0,
      round_id: 1,
      child_count: 0,
      status: 4,
      opponent1: {
        id: null,
        position: 1,
      },
      opponent2: {
        id: null,
        position: 2,
      },
    },
  ],
  match_game: [],
};
