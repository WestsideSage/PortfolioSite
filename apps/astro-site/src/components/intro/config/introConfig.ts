// introConfig.ts - Configuration for the domain expansion intro animation
export interface AnimationPhase {
  name: string;
  startTime: number;
  duration: number;
  fadeIn?: number;
  fadeOut?: number;
}

export interface IntroConfig {
  totalDuration: number;
  phases: Record<string, AnimationPhase>;
  audio: {
    file: string;
    autoplay: boolean;
  };
  accessibility: {
    skipKeys: string[];
    announcements: boolean;
  };
}

export const introConfig: IntroConfig = {
  totalDuration: 6000, // Total animation duration in ms (6 seconds)

  phases: {
    domainText: {
      name: 'Domain Expansion Text',
      startTime: 0,
      duration: 1500, // During "ryoiki tenkai" (0:00-0:01.5)
      fadeIn: 500,
      fadeOut: 300,
    },
    zodiac: {
      name: 'Zodiac Signs',
      startTime: 1500,
      duration: 3000, // From 1.5s to 4.5s (before "Muryokusho")
      fadeIn: 300,
      fadeOut: 1500,
    },
  },

  audio: {
    file: '/audio/gojo-domain-expansion-shortened.mp3',
    autoplay: true,
  },

  accessibility: {
    skipKeys: ['Escape', 'Tab'],
    announcements: true,
  },
};

// Animation timing utilities
export class AnimationTimings {
  static getPhaseDelay(phaseName: string): number {
    return introConfig.phases[phaseName]?.startTime || 0;
  }

  static getPhaseDuration(phaseName: string): number {
    return introConfig.phases[phaseName]?.duration || 1000;
  }

  static isPhaseActive(phaseName: string, currentTime: number): boolean {
    const phase = introConfig.phases[phaseName];
    if (!phase) return false;

    const endTime = phase.startTime + phase.duration;
    return currentTime >= phase.startTime && currentTime <= endTime;
  }
}
