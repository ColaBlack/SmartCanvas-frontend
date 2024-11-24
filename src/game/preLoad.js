import Phaser from 'phaser';
import dead from '@/assets/audio/Dead.wav';
import jump from '@/assets/audio/Jump.wav';
import score from '@/assets/audio/Score.wav';
import ground from '@/assets/images/Ground.png';
import cactus1 from '@/assets/images/Cactus-1.png';
import cactus2 from '@/assets/images/Cactus-2.png';
import cactus3 from '@/assets/images/Cactus-3.png';
import cactus4 from '@/assets/images/Cactus-4.png';
import cactus5 from '@/assets/images/Cactus-5.png';
import gameover_text from '@/assets/images/Gameover_text.png';
import replay_button from '@/assets/images/Replay_button.png';
import dinosaur1 from '@/assets/images/Dinosaur-1.png';
import dinosaur2 from '@/assets/images/Dinosaur-2.png';
import dinosaur3 from '@/assets/images/Dinosaur-3.png';
import dinosaur4 from '@/assets/images/Dinosaur-4.png';

/**
 * 在游戏开始前预加载资源
 */
export default class PreLoad extends Phaser.Scene {
  constructor() {
    super('preLoadScene');
  }

  preload() {
    // 加载背景音乐

    // 死亡音效
    this.load.audio('dead', dead);

    // 跳跃音效
    this.load.audio('jump', jump);
    // 得分音效
    this.load.audio('score', score);

    // 加载图片资源

    this.load.image(`cactus-1`, cactus1);
    this.load.image(`cactus-2`, cactus2);
    this.load.image(`cactus-3`, cactus3);
    this.load.image(`cactus-4`, cactus4);
    this.load.image(`cactus-5`, cactus5);

    // 地面图片
    this.load.image('ground', ground);

    // 游戏结束文字图片
    this.load.image('gameover_text', gameover_text);

    // 再玩一次按钮图片
    this.load.image('replay_button', replay_button);

    // 4张小恐龙图片
    this.load.spritesheet('dinosaur-1', dinosaur1, {
      frameWidth: 88,
      frameHeight: 94,
    });
    this.load.spritesheet('dinosaur-2', dinosaur2, {
      frameWidth: 88,
      frameHeight: 94,
    });
    this.load.spritesheet('dinosaur-3', dinosaur3, {
      frameWidth: 88,
      frameHeight: 94,
    });
    this.load.spritesheet('dinosaur-4', dinosaur4, {
      frameWidth: 88,
      frameHeight: 94,
    });
  }

  create() {
    // 切换到游戏场景
    this.scene.start('gameScene');
  }
}
