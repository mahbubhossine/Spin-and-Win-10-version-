class Game extends Phaser.Scene {
  constructor() {
    super({
      key: "Game",
      physics: {
        default: "arcade",
        arcade: {
          debug: false,
        },
      },
    });

    this.configure();
    this.gameConfig();
  }
  gameConfig() {
    this.totalSpins = 0;
    this.segments = null;
  }
  configure() {
    this.screen = "home";
    this.soundOn = true;
  }

  preload() {
    this.loadingText = this.add
      .text(
        this.cameras.main.width / 2,
        this.cameras.main.height / 2,
        "Loading: 0%",
        {
          fontFamily: "Arial",
          fontSize: "32px",
          color: "#ffffff",
        },
      )
      .setOrigin(0.5);

    this.load.image("wheelFrame", `${gitHubUrl}spin/wheelFrame.png`);
    this.load.image("logo", `${gitHubUrl}spin/logo.png`);
    this.load.image("spark", `${gitHubUrl}spin/spark.png`);
    this.load.image("wheelBg", `${gitHubUrl}spin/wheelBg.png`);
    this.load.image("tulip", `${gitHubUrl}spin/tulip.png`);
    this.load.image("win", `${gitHubUrl}spin/win.png`);
    this.load.image("lose", `${gitHubUrl}spin/lose.png`);
    this.load.image("C7", `${gitHubUrl}spin/7.png`);
    this.load.image("BG", `${gitHubUrl}spin/blueGem.png`);
    this.load.image("bell", `${gitHubUrl}spin/bell.png`);
    this.load.image("dollar", `${gitHubUrl}spin/doller.png`);
    this.load.image("GG", `${gitHubUrl}spin/greenGem.png`);
    this.load.image("PG", `${gitHubUrl}spin/purpleGem.png`);

    this.load.image("UIBackground", `${gitHubUrl}spin/bg.png`);
    this.load.image("bgA1", `${gitHubUrl}spin/bgA1.png`);
    this.load.image("bgA2", `${gitHubUrl}spin/bgA1.png`);
    this.load.image("particle", `${gitHubUrl}spin/particles.webp`);
    this.load.image("dollar", `${gitHubUrl}spin/dollers.png`);
    this.load.image("sparkAnim", `${gitHubUrl}spin/sparkAnim.png`);

    this.load.image("home", `${gitHubUrl}UI/home-icon.png`);
    this.load.image("close", `${gitHubUrl}UI/close.png`);
    this.load.image("infoIcon", `${gitHubUrl}UI/info-icon.png`);
    this.load.image("soundOn", `${gitHubUrl}UI/soundon-button.png`);
    this.load.image("soundOff", `${gitHubUrl}UI/soundoff-button.png`);

    this.load.audio("spinning", `${gitHubUrl}sounds/spinning.mp3`);
    this.load.audio("bgaudio", `${gitHubUrl}sounds/bgaudio.mp3`);
    this.load.audio("congrats", `${gitHubUrl}sounds/congrats.mp3`);
    this.load.audio("lost", `${gitHubUrl}sounds/lose-sound.mp3`);

    this.load.on("progress", (value) => {
      this.loadingText.setText(`Loading: ${Math.round(value * 100)}%`);
    });
    this.load.on("complete", () => {
      this.loadingText.destroy(); // remove from screen
    });
  }

  create() {
    this.cameras.main.fadeIn(1000);

    if (this.loaderImage) {
      this.loaderImage.destroy();
    }
    this.addUI();
  }

  addUI() {
    this.screenRatio = 2.3;
    if (this.screen === "home") {
      this.addHomeUI();
    } else if (this.screen === "info") {
      this.addInfoUI();
    }
  }
  addHomeUI() {
    this.addSounds();
    this.UIBackground = this.add
      .sprite(halfWidth, halfHeight, "bgA1")
      .setDisplaySize(width, height)
      .setAlpha(1);

    this.UIBackground.setDepth(-1);

    // this.anims.create({
    //   key: "bgAnim",
    //   frames: [{ key: "bgA1" }, { key: "bgA2" }],
    //   frameRate: 4,
    //   repeat: -1,
    // });

    // this.UIBackground.play("bgAnim");

    const particles = this.add.particles(0, 0, "particle", {
      x: halfWidth * 0.92,
      y: halfHeight * 0.65,
      speed: { min: 20, max: 40 },
      angle: { min: 0, max: 360 },
      alpha: { start: 1, end: 0 },
      scale: { start: 0.4, end: 2.7 },
      lifespan: 1000,
      frequency: 10,
      blendMode: "ADD",
    });

    let points = {};
    let pointIndex = 0;

    this.input.on("pointerdown", (pointer) => {
      points[pointIndex] = {
        x: Math.floor(pointer.x),
        y: Math.floor(pointer.y),
      };
      pointIndex++;
      console.log(points);
    });

    this.points = {
      0: {
        x: 125,
        y: 254,
      },
      1: {
        x: 152,
        y: 203,
      },
      2: {
        x: 200,
        y: 158,
      },
      3: {
        x: 238,
        y: 122,
      },
      4: {
        x: 275,
        y: 102,
      },
      5: {
        x: 339,
        y: 88,
      },
      6: {
        x: 411,
        y: 46,
      },
      7: {
        x: 455,
        y: 8,
      },
      8: {
        x: 571,
        y: 7,
      },
      9: {
        x: 633,
        y: 7,
      },
      10: {
        x: 767,
        y: 10,
      },
      11: {
        x: 838,
        y: 2,
      },
      12: {
        x: 883,
        y: 4,
      },
      13: {
        x: 939,
        y: 6,
      },
      14: {
        x: 984,
        y: 4,
      },
      15: {
        x: 1003,
        y: 3,
      },
      16: {
        x: 1016,
        y: 23,
      },
      17: {
        x: 1065,
        y: 64,
      },
      18: {
        x: 1123,
        y: 80,
      },
      19: {
        x: 1173,
        y: 94,
      },
      20: {
        x: 1249,
        y: 99,
      },
      21: {
        x: 1288,
        y: 102,
      },
      22: {
        x: 1345,
        y: 128,
      },
      23: {
        x: 1366,
        y: 157,
      },
      24: {
        x: 1408,
        y: 203,
      },
      25: {
        x: 1432,
        y: 237,
      },
      26: {
        x: 1435,
        y: 251,
      },
      27: {
        x: 1389,
        y: 256,
      },
      28: {
        x: 1232,
        y: 256,
      },
      29: {
        x: 1149,
        y: 256,
      },
      30: {
        x: 1075,
        y: 257,
      },
      31: {
        x: 988,
        y: 258,
      },
      32: {
        x: 869,
        y: 257,
      },
      33: {
        x: 797,
        y: 256,
      },
      34: {
        x: 694,
        y: 255,
      },
      35: {
        x: 627,
        y: 258,
      },
      36: {
        x: 535,
        y: 261,
      },
      37: {
        x: 449,
        y: 265,
      },
      38: {
        x: 394,
        y: 262,
      },
      39: {
        x: 326,
        y: 266,
      },
      40: {
        x: 237,
        y: 245,
      },
      41: {
        x: 194,
        y: 253,
      },
    };
    this.points2 = {
      0: {
        x: 87,
        y: 386,
      },
      1: {
        x: 106,
        y: 324,
      },
      2: {
        x: 128,
        y: 259,
      },
      3: {
        x: 181,
        y: 184,
      },
      4: {
        x: 221,
        y: 131,
      },
      5: {
        x: 311,
        y: 96,
      },
      6: {
        x: 386,
        y: 58,
      },
      7: {
        x: 437,
        y: 23,
      },
      8: {
        x: 460,
        y: 8,
      },
      9: {
        x: 592,
        y: 4,
      },
      10: {
        x: 710,
        y: 8,
      },
      11: {
        x: 846,
        y: 9,
      },
      12: {
        x: 995,
        y: 6,
      },
      13: {
        x: 1061,
        y: 49,
      },
      14: {
        x: 1155,
        y: 86,
      },
      15: {
        x: 1244,
        y: 104,
      },
      16: {
        x: 1300,
        y: 116,
      },
      17: {
        x: 1368,
        y: 163,
      },
      18: {
        x: 1417,
        y: 233,
      },
      19: {
        x: 1451,
        y: 317,
      },
      20: {
        x: 1471,
        y: 487,
      },
      21: {
        x: 1299,
        y: 460,
      },
      22: {
        x: 1262,
        y: 389,
      },
      23: {
        x: 1175,
        y: 439,
      },
      24: {
        x: 1101,
        y: 494,
      },
      25: {
        x: 959,
        y: 518,
      },
      26: {
        x: 764,
        y: 533,
      },
      27: {
        x: 546,
        y: 506,
      },
      28: {
        x: 546,
        y: 506,
      },
      29: {
        x: 374,
        y: 459,
      },
      30: {
        x: 288,
        y: 450,
      },
      31: {
        x: 270,
        y: 376,
      },
      32: {
        x: 144,
        y: 362,
      },
      33: {
        x: 118,
        y: 431,
      },
      34: {
        x: 73,
        y: 422,
      },
      35: {
        x: 85,
        y: 348,
      },
    };

    this.createBgAnimation();
    this.createIcons();

    if (this.soundOn) {
      this.bgaudioSound.play();
    }

    this.soundIcon = this.add
      .image(width - 160, 57, this.soundOn ? "soundOn" : "soundOff")
      .setScale(0.4)
      .setInteractive({ useHandCursor: true })
      .setScrollFactor(0)
      .setDepth(Infinity);

    this.infoIcon = this.add
      .image(width - 80, 55, "infoIcon")
      .setScale(0.4)
      .setInteractive({ useHandCursor: true });

    this.wheelBg = this.add
      .image(halfWidth * 0.953, halfHeight * 0.842, "wheelBg")
      .setScale(1.1);

    this.tulip = this.add
      .sprite(halfWidth, halfHeight, "tulip")
      .setDisplaySize(width, height)
      .setAlpha(1);

    const wheel = this.createWheel(
      this,
      halfWidth * 0.952,
      halfHeight * 0.834,
      276,
    );
    this.wheelCover = this.add
      .image(halfWidth, halfHeight * 1.06, "wheelFrame")
      .setAlpha(1)
      .setScale(1.1);

    // this.SpinBtnBox = this.add
    //   .rexRoundRectangle(width / 2, height - 70, 200, 80, 20, 0xc97b00)
    //   .setStrokeStyle(5, 0xffffff) // ← 5px white stroke
    //   .setDepth(4)
    //   .setInteractive({ useHandCursor: true });

    this.SpinBtnBox = this.add
      .image(width * 0.85, height * 0.85, "wheelBg")
      .setScale(0.6, 0.25)
      .setInteractive({ useHandCursor: true });

    this.SpinBtn = this.add
      .text(width * 0.85, height * 0.85, "SPIN", {
        fontFamily: "RakeslyRG",
        fontSize: "60px",
        fontStyle: "bold",
        color: "#ab3f01ff",
        align: "center",
      })
      .setOrigin(0.5)
      .setDepth(6);

    this.SpinBtnBox.on("pointerdown", () => {
      this.spinPressed(this.SpinBtn, this.SpinBtnBox, wheel);
    });

    this.soundIcon.on("pointerdown", () => {
      this.tweens.add({
        targets: this.soundIcon,
        scale: 0.3,
        duration: 100,

        onComplete: () => {
          this.tweens.add({
            targets: this.soundIcon,
            scale: 0.4,
            duration: 100,

            onComplete: () => {
              if (this.soundOn) {
                this.sound.stopAll();
                this.soundOn = false;

                this.soundIcon.setTexture("soundOff");
              } else {
                this.soundOn = true;
                this.bgaudioSound.play();
                this.soundIcon.setTexture("soundOn");
              }
            },
          });
        },
      });
    });

    this.infoIcon.on("pointerdown", () => {
      this.tweens.add({
        targets: this.infoIcon,
        scale: 0.5,
        duration: 100,

        onComplete: () => {
          this.tweens.add({
            targets: this.infoIcon,
            scale: 0.4,
            duration: 100,

            onComplete: () => {
              if (!this.spinning) {
                this.screen = "info";

                this.scene.restart();
              }
            },
          });
        },
      });
    });
  }

  createIcons() {
    const bgIcon = this.add
      .image(1200, 160, "C7")
      .setAlpha(0.9)
      .setScale(0.27)
      .setDepth(-1)
      .setOrigin(0.8, 0.2);
    this.tweens.add({
      targets: bgIcon,
      angle: { from: -35, to: 0 },
      duration: 1300,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });

    const bgIcon2 = this.add
      .image(1350, 330, "PG")
      .setAlpha(0.9)
      .setAngle(20)
      .setOrigin(0.5, 0.9)
      .setScale(0.11)
      .setDepth(-1);
    this.tweens.add({
      targets: bgIcon2,
      angle: { from: 20, to: 40 },
      duration: 1200,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });
    const bgIcon3 = this.add
      .image(1250, 350, "bell")
      .setAlpha(0.9)
      .setAngle(10)
      .setScale(0.18)
      .setOrigin(0.5, 0)
      .setDepth(-1);
    this.tweens.add({
      targets: bgIcon3,
      angle: { from: -20, to: 20 },
      duration: 1500,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });

    const bgIcon4 = this.add
      .image(270, 420, "GG")
      .setAlpha(0.9)
      .setAngle(-20)
      .setScale(0.11)
      .setOrigin(0.5, 1.5)
      .setDepth(-1);
    this.tweens.add({
      targets: bgIcon4,
      angle: { from: -20, to: -40 },
      duration: 1600,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });

    const bgIcon5 = this.add
      .image(350, 180, "dollar")
      .setAlpha(0.9)
      .setAngle(0)
      .setScale(0.2)
      .setOrigin(0.5, 0.5)
      .setDepth(-1);
    this.tweens.add({
      targets: bgIcon5,
      angle: { from: -10, to: 10 },
      duration: 1300,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });

    const bgIcon6 = this.add
      .image(1420, 480, "dollar")
      .setAlpha(0.9)
      .setAngle(0)
      .setScale(0.13)
      .setOrigin(0.5, 0.5)
      .setDepth(-1);
    this.tweens.add({
      targets: bgIcon6,
      angle: { from: -20, to: 10 },
      duration: 1300,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });

    const bgIcon7 = this.add
      .image(720, 180, "BG")
      .setAlpha(0.9)
      .setAngle(0)
      .setScale(0.13)
      .setOrigin(0.5, 0.5)
      .setDepth(-1);
    this.tweens.add({
      targets: bgIcon7,
      angle: { from: -20, to: 10 },
      duration: 1300,
      ease: "Sine.easeInOut",
      yoyo: true,
      repeat: -1,
    });
  }

  createBgAnimation() {
    const polygonPoints = Object.values(this.points2);
    this.polygon = new Phaser.Geom.Polygon(polygonPoints);

    // Spark pool
    this.sparkGroup = this.physics.add.group({
      defaultKey: "sparkAnim",
      maxSize: 100,
    });

    this.time.addEvent({
      delay: 5,
      loop: true,
      callback: () => this.spawnSpark(),
    });

    const polygonPoints2 = Object.values(this.points);
    this.polygon2 = new Phaser.Geom.Polygon(polygonPoints2);

    // Spark pool
    this.sparkGroup2 = this.physics.add.group({
      defaultKey: "sparkAnim",
      maxSize: 500,
    });

    this.time.addEvent({
      delay: 100,
      loop: true,
      callback: () => this.spawnSpark2(),
    });
  }

  spawnSpark() {
    const p = this.getRandomPointInPolygon(this.polygon);

    const spark = this.sparkGroup.get(p.x, p.y);

    if (!spark) return;

    let alpha = Phaser.Math.Between(5, 10);

    spark
      .setActive(true)
      .setVisible(true)
      .setScale(0)
      .setAlpha(alpha * 0.1)
      .setDepth(-1);

    spark.body.enable = true;

    let scale = Phaser.Math.Between(3, 5);

    this.tweens.add({
      targets: spark,
      scaleX: 0.2 * scale * 0.2,
      scaleY: 0.25 * scale * 0.2,
      duration: 400,
      ease: "Sine.easeOut",
      onComplete: () => {
        // Shrink + fade
        this.tweens.add({
          targets: spark,
          scale: 0,
          alpha: 0,
          duration: 900,
          ease: "Sine.easeIn",
          onComplete: () => {
            spark.disableBody(true, true);
          },
        });
      },
    });
  }

  spawnSpark2() {
    const p = this.getRandomPointInPolygon(this.polygon2);

    const spark = this.sparkGroup2.get(p.x, p.y);

    if (!spark) return;

    let alpha = Phaser.Math.Between(5, 10);

    spark
      .setActive(true)
      .setVisible(true)
      .setScale(0)
      .setAlpha(alpha * 0.1)
      .setDepth(-1);

    spark.body.enable = true;

    spark.body.setGravityY(400);

    spark.setVelocity(
      Phaser.Math.Between(-30, 30),
      Phaser.Math.Between(-120, -60),
    );

    let scale = Phaser.Math.Between(3, 5);

    this.tweens.add({
      targets: spark,
      scaleX: 0.2 * scale * 0.2,
      scaleY: 0.25 * scale * 0.2,
      duration: 400,
      ease: "Sine.easeOut",
      onComplete: () => {
        // Shrink + fade
        this.tweens.add({
          targets: spark,
          scale: 0,
          alpha: 0,
          duration: 900,
          ease: "Sine.easeIn",
          onComplete: () => {
            spark.disableBody(true, true);
          },
        });
      },
    });
  }

  getRandomPointInPolygon(poly) {
    const bounds = Phaser.Geom.Polygon.GetAABB(poly);
    const point = new Phaser.Geom.Point();

    do {
      point.x = Phaser.Math.Between(bounds.x, bounds.right);
      point.y = Phaser.Math.Between(bounds.y, bounds.bottom);
    } while (!Phaser.Geom.Polygon.Contains(poly, point.x, point.y));

    return point;
  }

  createWheel(scene, x, y, radius) {
    this.segments = [...wheelPrizes];

    let totalProbability = wheelPrizes.reduce(
      (sum, prize) => sum + prize.probability,
      0,
    );

    let niceTryProbability =
      (100 - totalProbability) / (20 - wheelPrizes.length);

    for (let i = 0; i < sliceNumber - wheelPrizes.length; i++) {
      if (Math.random() * 10 < 5) {
        this.segments.push({
          name: "Nice try",
          probability: niceTryProbability,
        });
      } else {
        this.segments.push({
          name: "Try again",
          probability: niceTryProbability,
        });
      }
    }

    this.segments.sort(() => Math.random() - 0.5);

    const wheelContainer = scene.add.container(x, y);

    // const wheelBg = scene.add.image(1, 3, "wheelBg");
    // wheelContainer.add(wheelBg);

    const gfx = scene.add.graphics();
    wheelContainer.add(gfx);

    const thickness = radius * 0.7;
    const innerRadius = radius - thickness;

    const outerStroke = 2; // gap control
    const total = this.segments.length;
    const degPer = 360 / total;

    console.log(total);

    // REAL GAP (pixel → angle)
    const gapAngle = outerStroke / radius;

    for (let i = 0; i < total; i++) {
      const seg = this.segments[i];

      const baseStart = Phaser.Math.DegToRad(-90 + i * degPer);
      const baseEnd = Phaser.Math.DegToRad(-90 + (i + 1) * degPer);

      // APPLY GAP
      const startAngle = baseStart + gapAngle;
      const endAngle = baseEnd - gapAngle;
      const midAngle = (startAngle + endAngle) / 2;

      const color = this.getRandomDarkColor();

      const outerPoints = [];
      const innerPoints = [];
      const steps = 64;

      for (let p = 0; p <= steps; p++) {
        const t = p / steps;
        const a = Phaser.Math.Interpolation.Linear([startAngle, endAngle], t);
        outerPoints.push({
          x: Math.cos(a) * radius,
          y: Math.sin(a) * radius,
        });
      }

      for (let p = 0; p <= steps; p++) {
        const t = p / steps;
        const a = Phaser.Math.Interpolation.Linear([endAngle, startAngle], t);
        innerPoints.push({
          x: Math.cos(a) * innerRadius,
          y: Math.sin(a) * innerRadius,
        });
      }

      // DRAW SLICE (NO STROKE)
      gfx.fillStyle(color, 1);
      gfx.beginPath();
      gfx.moveTo(outerPoints[0].x, outerPoints[0].y);

      outerPoints.forEach((pt) => gfx.lineTo(pt.x, pt.y));
      innerPoints.forEach((pt) => gfx.lineTo(pt.x, pt.y));

      gfx.closePath();
      gfx.fillPath();

      // TEXT
      const labelRadius = innerRadius + (radius - innerRadius) * 0.75;
      const labelX = Math.cos(midAngle) * labelRadius;
      const labelY = Math.sin(midAngle) * labelRadius;

      const text = scene.add.text(labelX, labelY, seg.name, {
        fontFamily: "RakeslyRG",
        fontSize: Math.max(14, Math.round(radius * 0.07)),
        color: "#ffffff",
        align: "center",
      });

      text.setOrigin(0.5);
      text.rotation = midAngle;
      wheelContainer.add(text);
    }

    return wheelContainer;
  }

  getRandomDarkColor() {
    if (NiceTryColors == "light") {
      // Light backgrounds, still enough contrast for white text
      const lightColors = [
        0xff6f61, // soft coral red
        0xffb84d, // muted orange
        0xf5d76e, // warm yellow
        0x7fd1ae, // soft mint green
        0x5dade2, // cool light blue
        0xa569bd, // muted lavender
        0xf1948a, // rose pink
        0x73c6b6, // aqua teal
        0xf8c471, // pastel amber
      ];
      return Phaser.Utils.Array.GetRandom(lightColors);
    } else if (NiceTryColors == "dark") {
      // Dark tones, ideal for white or bright text
      const darkColors = [
        0x512e5f, // deep purple
        0x154360, // navy blue
        0x0e6251, // dark teal
        0x7b241c, // dark red
        0x4a235a, // dark violet
        0x1b2631, // charcoal blue
        0x424949, // dark gray
        0x4d5656, // muted green-gray
        0x633974, // eggplant
      ];
      return Phaser.Utils.Array.GetRandom(darkColors);
    } else if (NiceTryColors == "any") {
      // All-around colorful mix, works with either white or black text
      const anyColors = [
        0xff0000, // red
        0xffa500, // orange
        0xdddd00, // yellow
        0x00dd00, // green
        0x00ffff, // cyan
        0x0000ff, // blue
        0xff00ff, // magenta
        0xff69b4, // pink
        0x8a2be2, // purple
      ];
      return Phaser.Utils.Array.GetRandom(anyColors);
    } else if (NiceTryColors === "golden") {
      // Golden / orange casino wheel segment colors
      const wheelSegmentColors = [
        0xffd700, // classic gold
        0xffc107, // bright gold
        0xffb300, // amber gold
        0xffa000, // deep amber
        0xd4af37, // metallic gold
        0xb8860b, // dark goldenrod

        // Golden green / emerald
        0x9acd32, // yellow-green gold
        0x7cb342, // olive gold
        0x2ecc71, // emerald green
        0x1e8449, // dark emerald
        0x145a32, // deep green-gold shadow

        // Golden red / ruby
        0xe74c3c, // ruby red
        0xc0392b, // deep ruby
        0xb03a2e, // dark red-gold
        0x922b21, // wine red
        0xcd6155, // warm red highlight

        // Bronze / copper
        0xd68910, // bronze
        0xb9770e, // dark bronze
        0xa04000, // copper
        0x873600, // deep copper

        // Accent glow tones
        0xffe082, // soft glow gold
        0xffcc80, // warm glow orange
      ];

      return Phaser.Utils.Array.GetRandom(wheelSegmentColors);
    } else {
      // Return directly if user provided a custom color
      return NiceTryColors;
    }
  }
  spinPressed(a, b, wheel) {
    if (!this.spinning) {
      const dollars2 = this.add.particles(0, 0, "dollars", {
        x: halfWidth,
        y: halfHeight * 0.9,
        speed: { min: 200, max: 300 },
        angle: { min: 0, max: 360 },
        alpha: { start: 1, end: 0 },
        scale: { start: 0.5, end: 3 },
        lifespan: 1200,
        frequency: 10,
        blendMode: "ADD",
      });

      setTimeout(() => {
        dollars2.destroy();
      }, spinDuration);

      this.spinning = true;
      if (this.soundOn) {
        setTimeout(() => {
          this.spinningSound.play({
            rate: 8 / spinDuration,
            loop: false,
          });
        }, 100);
      }

      this.tweens.add({
        targets: [a],
        scale: 0.85,
        duration: 100,

        onComplete: () => {
          this.tweens.add({
            targets: [a],
            scale: 1,
            duration: 100,

            onComplete: () => {
              this.spinWheel(
                this,
                wheel,
                this.segments,
                spinDuration,
                (result) => {
                  console.log(result);
                  setTimeout(() => {
                    this.showResult(result);
                  }, 1000);
                },
              );
            },
          });
        },
      });
      this.tweens.add({
        targets: [b],
        scaleX: 0.5,
        scaleY: 0.2,
        duration: 100,

        onComplete: () => {
          this.tweens.add({
            targets: [b],
            scaleX: 0.6,
            scaleY: 0.25,
            duration: 100,
          });
        },
      });
    }
  }

  spinWheel(scene, wheelContainer, wheelPrizes, duration, onComplete) {
    let totalProbability = wheelPrizes.reduce(
      (sum, p) => sum + p.probability,
      0,
    );
    let rand = Math.random() * totalProbability;

    let cumulative = 0;
    let chosenIndex = 0;
    for (let i = 0; i < wheelPrizes.length; i++) {
      cumulative += wheelPrizes[i].probability;
      if (rand <= cumulative) {
        chosenIndex = i;
        break;
      }
    }

    let segments = wheelPrizes.length;
    let degPer = 360 / segments;
    let stopAngle = 360 - (chosenIndex * degPer + degPer / 2);

    let extraSpins = 6 * 360;
    let finalAngle = stopAngle + extraSpins;

    scene.tweens.add({
      targets: wheelContainer,
      angle: finalAngle,
      duration: duration * 1000,
      ease: "Sine.easeOut",
      onComplete: () => {
        if (onComplete) onComplete(wheelPrizes[chosenIndex]);
      },
    });
  }

  showResult(result) {
    if (result.name == "Nice try") {
      this.showLoseMessage(result);
      if (this.soundOn) {
        this.lostSound.play();
      }
    } else if (result.name == "Try again") {
      this.showLoseMessage(result);
      if (this.soundOn) {
        this.lostSound.play();
      }
    } else {
      this.showWinMessage(result);
      if (this.soundOn) {
        this.congratsSound.play();
      }
    }
  }

  showWinMessage(result) {
    const x = halfWidth;
    const y = halfHeight;

    let container = this.add.container(x, y).setAlpha(0).setScale(0);

    let win = this.add.image(0, 0, "win").setOrigin(0.5).setScale(0.7);

    // let bg = this.add.graphics();
    // bg.fillStyle(0x226f22, 0.95);
    // bg.fillRoundedRect(0, 20, width2, height2, radius);
    // bg.lineStyle(4, 0x4cff4c, 1);
    // bg.strokeRoundedRect(0, 20, width2, height2, radius);

    let won = this.add
      .text(0, -60, "YOU WIN!!!", {
        fontFamily: "RakeslyRG",
        fontSize: "55px",
        fontStyle: "bold",
        color: "#ab3f01ff",
        align: "center",
      })
      .setOrigin(0.5);

    let itemName = this.add
      .text(0, 20, `${result.name}`, {
        fontFamily: "RakeslyRG",
        fontSize: "65px",
        fontStyle: "bold",
        color: "#ab3f01ff",
        align: "center",
      })
      .setOrigin(0.5);
    console.log("WIn");

    this.sendPrize = `${result.value}`;
    this.totalSpins = 1;

    let claimBtn = this.add
      .image(0, 120, "wheelBg")
      .setScale(0.3, 0.12)
      .setInteractive({ useHandCursor: true });

    let claimBtn2 = this.add
      .text(0, 120, "CLAIM", {
        fontFamily: "RakeslyRG",
        fontSize: "30px",
        fontStyle: "bold",
        color: "#ab3f01ff",
        align: "center",
      })
      .setOrigin(0.5)
      .setDepth(6);

    claimBtn.on("pointerover", () => claimBtn.setScale(0.29, 0.11));
    claimBtn.on("pointerout", () => claimBtn.setScale(0.3, 0.12));

    container.add([win, claimBtn, claimBtn2, won, itemName]);
    container.setDepth(10);
    claimBtn.on("pointerdown", () => {
      if (!this.clicked) {
        this.clicked = true;
        this.tweens.add({
          targets: claimBtn,
          scaleX: 0.26,
          scaleY: 0.09,
          duration: 100,
          onComplete: () => {
            this.tweens.add({
              targets: claimBtn,
              scaleX: 0.28,
              scaleY: 0.1,
              duration: 100,
              onComplete: () => {
                this.clicked = false;
                this.fireworksTween.destroy();
                this.fireworkTimer.destroy();
                container.destroy();
                this.spinning = false;
              },
            });
          },
        });
      }
    });

    setTimeout(() => {
      this.fireworksTween.destroy();
      this.fireworkTimer.destroy();
      container.destroy();
      this.spinning = false;
    }, 10000);

    this.tweens.add({
      targets: container,
      alpha: 1,
      scale: 1,
      duration: 600,
      ease: "Back.easeOut",
    });
    container.setDepth(10);

    this.particles = this.add.particles("spark");
    this.particles.setDepth(9);
    this.fireworksTween = this.time.addEvent({
      delay: 600,
      loop: true,
      callback: () => {
        let randX = Phaser.Math.Between(halfWidth - 100, halfWidth + 100);
        let randY = Phaser.Math.Between(halfHeight - 75, halfHeight + 75);
        this.firework.call(this, randX, randY);
      },
    });
  }

  showLoseMessage(result) {
    const x = halfWidth;
    const y = halfHeight;

    let container = this.add.container(x, y).setAlpha(0).setScale(0);

    let lose = this.add.image(0, 0, "lose").setOrigin(0.5).setScale(0.9);

    // let bg = this.add.graphics();
    // bg.fillStyle(0x226f22, 0.95);
    // bg.fillRoundedRect(0, 20, width2, height2, radius);
    // bg.lineStyle(4, 0x4cff4c, 1);
    // bg.strokeRoundedRect(0, 20, width2, height2, radius);

    let won = this.add
      .text(0, 20, "Better Luck Next Time.", {
        fontFamily: "RakeslyRG",
        fontSize: "60px",
        fontStyle: "bold",
        color: "#e1e1e1ff",
        align: "center",
      })
      .setOrigin(0.5);

    let itemName = this.add
      .text(0, -60, `${result.name}`, {
        fontFamily: "RakeslyRG",
        fontSize: "60px",
        fontStyle: "bold",
        color: "#e1e1e1ff",
        align: "center",
      })
      .setOrigin(0.5);
    console.log("WIn");

    this.sendPrize = `${result.value}`;
    this.totalSpins = 1;

    let claimBtn = this.add
      .image(0, 130, "wheelBg")
      .setScale(0.3, 0.12)
      .setAlpha(0.7)
      .setInteractive({ useHandCursor: true });

    let claimBtn2 = this.add
      .text(0, 130, "OKAY", {
        fontFamily: "RakeslyRG",
        fontSize: "30px",
        fontStyle: "bold",
        color: "#973700ff",
        align: "center",
      })
      .setOrigin(0.5)
      .setDepth(6);

    claimBtn.on("pointerover", () => claimBtn.setScale(0.29, 0.11));
    claimBtn.on("pointerout", () => claimBtn.setScale(0.3, 0.12));

    container.add([lose, claimBtn, claimBtn2, won, itemName]);
    container.setDepth(10);
    claimBtn.on("pointerdown", () => {
      if (!this.clicked) {
        this.clicked = true;
        this.tweens.add({
          targets: claimBtn,
          scaleX: 0.26,
          scaleY: 0.09,
          duration: 100,
          onComplete: () => {
            this.tweens.add({
              targets: claimBtn,
              scaleX: 0.28,
              scaleY: 0.1,
              duration: 100,
              onComplete: () => {
                this.clicked = false;
                container.destroy();
                this.spinning = false;
              },
            });
          },
        });
      }
    });

    setTimeout(() => {
      container.destroy();
      this.spinning = false;
    }, 108000);

    this.tweens.add({
      targets: container,
      alpha: 1,
      scale: 1,
      duration: 600,
      ease: "Back.easeOut",
    });
    container.setDepth(10);
  }
  firework(x, y) {
    if (!this.fireworks) {
      this.fireworks = this.add.particles(0, 0, "spark", {
        angle: { min: 0, max: 360 },
        speed: { min: 130, max: 220 },
        lifespan: { min: 1100, max: 1500 },
        alpha: { start: 1, end: 0.2 },
        gravityY: 200,
        scale: { start: 0.25, end: 0.6 },
        blendMode: "ADD",
        emitting: false,
      });
      this.fireworks.setDepth(5);
    }

    const popupCenterX = width / 2;
    const popupCenterY = height / 2 - 140;

    if (this.fireworkTimer) {
      this.fireworkTimer.remove();
      this.fireworkTimer = null;
    }

    this.fireworkTimer = this.time.addEvent({
      delay: 500,
      loop: true,
      callback: () => {
        const rx = popupCenterX + Phaser.Math.Between(-100, 100);
        const ry = popupCenterY + Phaser.Math.Between(-70, 75);
        this.fireworks.explode(Phaser.Math.Between(12, 28), rx, ry);
      },
      callbackScope: this,
    });
  }

  addInfoUI() {
    this.UIBackground = this.add.rectangle(350, 600, 800, 1200, 0xffffff);

    this.homeIcon = this.add
      .image(640, 55, "home")
      .setScale(0.4)
      .setInteractive();

    this.homeIcon.on("pointerdown", () => {
      this.tweens.add({
        targets: this.homeIcon,
        scale: 0.4,
        duration: 100,
        onComplete: () => {
          this.tweens.add({
            targets: this.homeIcon,
            scale: 0.5,
            duration: 100,
            onComplete: () => {
              this.screen = "home";
              this.scene.restart();
            },
          });
        },
      });
    });

    this.infoTitle = this.add
      .text(350, 70, "Won Prizes", {
        fontFamily: "RakeslyRG",
        fontSize: "40px",
        color: "#000",
        align: "center",
        stroke: "#000",
        strokeThickness: 1,
      })
      .setOrigin(0.5)
      .setScrollFactor(0)
      .setDepth(Infinity);
  }
  addSounds() {
    this.spinningSound = this.sound.add("spinning");

    this.bgaudioSound = this.sound.add("bgaudio");
    this.bgaudioSound.setVolume(0.05);
    this.bgaudioSound.play({
      loop: true,
    });

    this.lostSound = this.sound.add("lost");
    this.lostSound.setVolume(0.1);
    this.congratsSound = this.sound.add("congrats");
    this.congratsSound.setVolume(0.2);
  }

  update() {}
}
