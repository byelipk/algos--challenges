const Rect = require('../rectangles');

test('findXOverlap when rects completely overlap', () => {
  const r1 = Rect.build();
  const r2 = Rect.build();

  expect(Rect.findXOverlap(r1, r2)).toEqual(true);
});

test('findXOverlap when rect2 is offset to the right', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({leftX: 10});

  expect(Rect.findXOverlap(r1, r2)).toEqual(true);
});

test('findXOverlap when rect2 is negatively offset to the left', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({leftX: -50});

  expect(Rect.findXOverlap(r1, r2)).toEqual(true);
});

test('findXOverlap when rects do not touch horizontally', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({leftX: 110});
  const r3 = Rect.build({leftX: -110});

  expect(Rect.findXOverlap(r1, r2)).toEqual(false);
  expect(Rect.findXOverlap(r1, r3)).toEqual(false);
});

test('findXOverlap when rects touch but do not overlap', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({leftX: 100});
  const r3 = Rect.build({leftX: -100});

  expect(Rect.findXOverlap(r1, r2)).toEqual(false);
  expect(Rect.findXOverlap(r1, r3)).toEqual(false);
});

test('findYOverlap when rects completely overlap', () => {
  const r1 = Rect.build();
  const r2 = Rect.build();

  expect(Rect.findYOverlap(r1, r2)).toEqual(true);
});

test('findYOverlap when rects do not touch vertically', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({leftX: 110});
  const r3 = Rect.build({leftX: -110});

  expect(Rect.findXOverlap(r1, r2)).toEqual(false);
  expect(Rect.findXOverlap(r1, r3)).toEqual(false);
});

test('findYOverlap when rects touch but do not overlap', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({bottomY: 0});
  const r3 = Rect.build({bottomY: 200});

  expect(Rect.findYOverlap(r1, r2)).toEqual(false);
  expect(Rect.findYOverlap(r1, r3)).toEqual(false);
});

test('findYOverlap when there is some vertical overlap', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({bottomY: 20});
  const r3 = Rect.build({bottomY: 150});

  expect(Rect.findYOverlap(r1, r2)).toEqual(true);
  expect(Rect.findYOverlap(r1, r3)).toEqual(true);
});

test('can detect 1 pixel overlap', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({leftX: 99, bottomY: 199});
  const r3 = Rect.build({leftX: -99, bottomY: 199});
  const r4 = Rect.build({leftX: -99, bottomY: 1});
  const r5 = Rect.build({leftX: 99, bottomY: 1});

  expect(Rect.findYOverlap(r1, r2)).toEqual(true);
  expect(Rect.findYOverlap(r1, r3)).toEqual(true);
  expect(Rect.findYOverlap(r1, r4)).toEqual(true);
  expect(Rect.findYOverlap(r1, r5)).toEqual(true);
});

test('intersect for rects that overlap completely', () => {
  const r1 = Rect.build();
  const r2 = Rect.build();

  const expected = Rect.build();

  expect(Rect.findOverlap(r1, r2)).toEqual(expected);
});

test('intersect for rects that overlap', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({leftX: 50, bottomY: 150});

  const expected = Rect.build({
    leftX: 50, bottomY: 100, width: 50, height: 50});

  expect(Rect.findOverlap(r1, r2)).toEqual(expected);
});

test('intersect for rects that do not overlap', () => {
  const r1 = Rect.build();
  const r2 = Rect.build({leftX: 110});
  const r3 = Rect.build({bottomY: 200});

  const expected = undefined;

  expect(Rect.findOverlap(r1, r2)).toEqual(expected);
  expect(Rect.findOverlap(r1, r3)).toEqual(expected);
});
