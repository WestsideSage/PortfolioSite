// IntroController.ts - Main controller for the domain expansion intro
import { introConfig, AnimationTimings } from '../config/introConfig';

export class IntroController {
  private intro: HTMLElement | null = null;
  private audio: HTMLAudioElement | null = null;
  private skipButton: HTMLButtonElement | null = null;
  private timeouts: ReturnType<typeof setTimeout>[] = [];
  private animationComplete = false;
  private currentPhase = '';

  // Scene elements
  private scenes: { [key: string]: HTMLElement | null } = {};

  constructor() {
    this.bindMethods();
  }

  private bindMethods() {
    this.handleSkip = this.handleSkip.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  public init(): void {
    this.cacheElements();
    this.setupEventListeners();
    this.preloadAudio();

    // Add intro-ready class to make scenes visible
    this.makeIntroReady();

    // Start intro after brief delay
    setTimeout(() => this.startIntro(), 500);

    console.log('� Emerald Sanctuary Domain Expansion Intro loaded! Press ESC to skip.');
  }

  private makeIntroReady(): void {
    // Add intro-ready class to all scenes to make them visible
    Object.values(this.scenes).forEach((scene) => {
      if (scene) {
        scene.classList.add('intro-ready');
      }
    });
  }

  private cacheElements(): void {
    this.intro = document.getElementById('gojo-intro');
    this.audio = document.getElementById('domain-audio') as HTMLAudioElement;
    this.skipButton = document.getElementById('skip-intro') as HTMLButtonElement;

    // Cache scene elements
    this.scenes = {
      domainText: document.getElementById('scene-domain-text'),
      zodiac: document.getElementById('scene-handsign'),
    };
  }

  private setupEventListeners(): void {
    if (this.skipButton) {
      this.skipButton.addEventListener('click', this.handleSkip);
    }

    document.addEventListener('keydown', this.handleKeydown);

    // Cleanup on page unload
    window.addEventListener('beforeunload', () => this.cleanup());
  }

  private preloadAudio(): void {
    if (!this.audio) return;

    this.audio.addEventListener('canplaythrough', () => {
      console.log('Audio ready to play');
    });

    this.audio.addEventListener('error', (e) => {
      console.warn('Audio failed to load:', e);
    });
  }

  private startIntro(): void {
    this.clearTimeouts();
    this.playAudio();
    this.runAnimationSequence();
  }

  private playAudio(): void {
    if (this.audio && introConfig.audio.autoplay) {
      this.audio.currentTime = 0;
      this.audio.play().catch((e) => console.log('Audio autoplay blocked:', e));
    }
  }

  private runAnimationSequence(): void {
    const phases = introConfig.phases;

    // Domain text phase (replacing eyes phase)
    this.schedulePhase('domainText', () => {
      this.showScene('domainText');
      this.animateDomainText();
    });

    // Zodiac phase
    this.schedulePhase('zodiac', () => {
      this.hideScene('domainText');
      this.showScene('zodiac');
      this.animateZodiacSigns();
    });

    // Final fadeout - starts at 4.5s (when "Muryokusho" begins)
    this.timeouts.push(
      setTimeout(() => {
        this.fadeOutIntro();
      }, 4500)
    );
  }

  private schedulePhase(phaseName: string, callback: () => void): void {
    const delay = AnimationTimings.getPhaseDelay(phaseName);
    this.timeouts.push(
      setTimeout(() => {
        this.currentPhase = phaseName;
        callback();
      }, delay)
    );
  }

  private showScene(sceneName: string): void {
    const scene = this.scenes[sceneName];
    if (scene) {
      scene.style.opacity = '1';
      scene.style.animation = 'fadeIn 0.5s ease-out';
    }
  }

  private hideScene(sceneName: string): void {
    const scene = this.scenes[sceneName];
    if (scene) {
      scene.style.opacity = '0';
    }
  }

  private animateDomainText(): void {
    const scene = this.scenes.domainText;
    if (scene) {
      // Add active class to trigger text animations
      scene.classList.add('active');
    }
  }

  private animateZodiacSigns(): void {
    const container = this.scenes.zodiac;
    if (!container) return;

    const aquarius = container.querySelector('.aquarius-sign') as HTMLElement;
    const scorpio = container.querySelector('.scorpio-sign') as HTMLElement;
    const leo = container.querySelector('.leo-sign') as HTMLElement;
    const nameReveal = container.querySelector('.name-reveal') as HTMLElement;

    if (!aquarius || !scorpio || !leo) return;

    // Phase 1: Initial positions (Aquarius visible, others hidden)
    aquarius.classList.add('phase-1');

    // Phase 2: All signs move to their final positions simultaneously (after 600ms)
    this.timeouts.push(
      setTimeout(() => {
        // Remove initial phase and apply final positions to all signs at once
        aquarius.classList.remove('phase-1');
        aquarius.classList.add('phase-2-aquarius');

        scorpio.classList.add('phase-2-scorpio');
        leo.classList.add('phase-2-leo');

        // Name reveal starts immediately as signs begin to split
        if (nameReveal) {
          nameReveal.classList.add('show');
        }
      }, 600)
    );
  }

  private fadeOutIntro(): void {
    if (!this.intro) return;

    this.intro.style.transition = 'opacity 1.5s ease-out';
    this.intro.style.opacity = '0';

    this.timeouts.push(
      setTimeout(() => {
        this.hideIntro();
      }, 1500)
    );
  }

  private hideIntro(): void {
    if (this.intro) {
      this.intro.style.display = 'none';
      this.animationComplete = true;
    }
    this.cleanup();
  }

  private handleSkip(): void {
    if (this.animationComplete) return;

    this.clearTimeouts();
    if (this.audio) this.audio.pause();
    this.hideIntro();
  }

  private handleKeydown(e: KeyboardEvent): void {
    if (introConfig.accessibility.skipKeys.includes(e.key) && !this.animationComplete) {
      this.handleSkip();
    }
  }

  private clearTimeouts(): void {
    this.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.timeouts = [];
  }

  private cleanup(): void {
    this.clearTimeouts();
    document.removeEventListener('keydown', this.handleKeydown);

    if (this.skipButton) {
      this.skipButton.removeEventListener('click', this.handleSkip);
    }
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  .scene {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.5s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
`;
document.head.appendChild(style);
