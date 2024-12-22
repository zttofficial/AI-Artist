'use client'

import { useLanguage } from '../../contexts/language-context'
import { works } from '../../translations/works'
import { Navigation } from '../../components/navigation'
import { ProcessingSketch } from '../../components/processing-sketch'
import Link from 'next/link'

const processingCode = `
ArrayList<Building> buildings;
ArrayList<Traveler> travelers;
int maxBuildings = 150;
int buildingLifetime = 800;

void setup() {
  size(800, 800);
  buildings = new ArrayList<Building>();
  travelers = new ArrayList<Traveler>();

  for (int i = 0; i < 30; i++) {
    float x = random(width);
    float y = random(height * 0.5, height * 0.9);
    float baseSize = random(20, 50);
    buildings.add(new Building(x, y, baseSize));
  }

  for (int i = 0; i < 10; i++) {
    travelers.add(new Traveler());
  }
}

void draw() {
  background(40);

  for (int i = buildings.size() - 1; i >= 0; i--) {
    Building b = buildings.get(i);
    b.update();
    b.display();

    if (b.age > buildingLifetime) {
      buildings.remove(i);
    }
  }

  for (Traveler t : travelers) {
    t.update();
    t.display();
  }

  fill(255, 150);
  textAlign(CENTER);
  textSize(14);
  text("Move your mouse to grow new buildings or make existing ones taller", width / 2, height - 20);
}

void mouseMoved() {
  if (buildings.size() < maxBuildings) {
    float x = mouseX + random(-30, 30);
    float y = mouseY + random(-30, 30);
    float baseSize = random(20, 50);

    if (!tooCloseToOthers(x, y, 60)) {
      buildings.add(new Building(x, y, baseSize));
    }
  }
}

boolean tooCloseToOthers(float x, float y, float minDist) {
  for (Building b : buildings) {
    if (dist(x, y, b.x, b.y) < minDist) return true;
  }
  return false;
}

class Building {
  float x, y, baseSize;
  float height;
  float growthSpeed;
  boolean growing;
  color buildingColor;
  int age;
  int design;

  Building(float x, float y, float baseSize) {
    this.x = x;
    this.y = y;
    this.baseSize = baseSize;
    this.height = baseSize;
    this.growthSpeed = random(0.5, 1.5);
    this.growing = false;
    this.age = 0;

    float r = random(100);
    if (r < 5) {
      this.design = 4;
    } else if (r < 25) {
      this.design = 3;
    } else if (r < 50) {
      this.design = 2;
    } else if (r < 80) {
      this.design = 1;
    } else {
      this.design = 0;
    }

    buildingColor = color(random(80, 150), random(80, 150), random(100, 200), 220);
  }

  void update() {
    age++;

    float distance = dist(mouseX, mouseY, x, y);
    growing = distance < 100;

    if (growing) {
      height += growthSpeed;
      height = constrain(height, baseSize, 200);
      age = 0;
    } else {
      height -= growthSpeed * 0.1;
      height = constrain(height, baseSize, 200);
    }
  }

  void display() {
    pushMatrix();
    translate(x, y);
    fill(buildingColor);
    noStroke();

    switch (design) {
      case 0:
        rect(-baseSize / 2, -height, baseSize, height);
        break;
      case 1:
        triangle(-baseSize / 2, 0, 0, -height, baseSize / 2, 0);
        break;
      case 2:
        rect(-baseSize, -height, baseSize / 2, height);
        rect(baseSize / 2, -height, baseSize / 2, height);
        break;
      case 3:
        rect(-baseSize / 4, -height, baseSize / 2, height);
        ellipse(0, -height, baseSize, baseSize * 0.5);
        break;
      case 4:
        for (int i = 0; i < 8; i++) {
          float angle = TWO_PI / 8 * i;
          float px = cos(angle) * baseSize / 2;
          float py = sin(angle) * baseSize / 2;
          ellipse(px, py - height / 2, baseSize * 0.1, baseSize * 0.1);
        }
        break;
    }
    popMatrix();
  }
}

class Traveler {
  float x, y, speedX, speedY;
  color c;

  Traveler() {
    x = random(width);
    y = random(height * 0.4, height * 0.9);
    speedX = random(-2, 2);
    speedY = random(-0.5, 0.5);
    c = color(random(200, 255), random(100, 150), random(100, 150), 200);
  }

  void update() {
    x += speedX;
    y += speedY;

    if (x < 0 || x > width) speedX *= -1;
    if (y < height * 0.4 || y > height * 0.9) speedY *= -1;
  }

  void display() {
    fill(c);
    noStroke();
    ellipse(x, y, 10, 10);
  }
}
`

export default function UrbanGrowing() {
  const { language } = useLanguage()
  const work = works[language].find(w => w.id === 'urban-growing-processing')

  if (!work) return null

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <main className="pt-24 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl mb-8">{work.title}</h1>
          <div className="mb-8">
            <ProcessingSketch code={processingCode} />
          </div>
          <p className="font-mono text-sm mb-4">{work.year}</p>
          <p className="font-mono text-sm mb-8">Medium: {work.medium}</p>
          <div className="prose max-w-none mb-8">
            <p>{work.description}</p>
          </div>
          {work.projectLink && (
            <a
              href={work.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-studio-accent hover:underline"
            >
              {language === 'en' ? 'View on OpenProcessing' : '在 OpenProcessing 上查看'}
            </a>
          )}
          <div className="mt-12">
            <Link href="/" className="font-mono text-sm text-studio-accent hover:underline">
              {language === 'en' ? '← Back to Home' : '← 返回首頁'}
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

