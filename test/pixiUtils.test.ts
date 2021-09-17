import { Sprite } from "@pixi/sprite";
import { Text } from "@pixi/text";
import {
  checkPixiVersion,
  cloneSprite,
  fontSizeStringToNumber,
  getFontPropertiesOfText,
} from "../src/pixiUtils";

describe("pixiUtils", () => {
  describe("cloneSprite()", () => {
    it("should create a shallow copy of a sprite.", () => {
      const originalSprite = Sprite.from("./icon.png");
      const clonedSprite = cloneSprite(originalSprite);

      expect(clonedSprite).not.toBe(originalSprite);
      expect(clonedSprite.texture).toBe(originalSprite.texture);
    });
  });

  describe("checkPixiVersion()", () => {
    it("should throw if the version doesn't exactly match", () => {
      expect(() => {
        checkPixiVersion("", 5);
      }).toThrow();
      expect(() => {
        checkPixiVersion("4.0.0", 5);
      }).toThrow();
      expect(() => {
        checkPixiVersion("6.0.0", 5);
      }).toThrow();
    });
    it("should return 0 otherwise", () => {
      expect(checkPixiVersion("5.3.0", 5)).toBe(0);
    });
  });

  describe("getFontPropertiesOfText()", () => {
    const textField = new Text("Test");

    it("should throw an error if the Text has not had updateText() called at least once.", () => {
      expect(() => {
        getFontPropertiesOfText(textField);
      }).toThrow();
    });

    it("should before setting any styles (but after calling updateTexT()) the metrics will be an expected default.", () => {
      // Note: text field must update at least once time after being create before the font change will take place.
      const defaultFontProps = getFontPropertiesOfText(textField, true);
      expect(defaultFontProps.ascent).toBe(25);
      expect(defaultFontProps.descent).toBe(5);
      expect(defaultFontProps.fontSize).toBe(30);
    });

    it("should provide the correct numbers after changing the style for the text.", () => {
      textField.style = {
        fontSize: 30,
        fontFamily: "Arial",
      };
      const fontProps = getFontPropertiesOfText(textField, true);
      expect(fontProps.ascent).toBe(28);
      expect(fontProps.descent).toBe(6);
      expect(fontProps.fontSize).toBe(34);
    });

    describe("What if the text you want is exactly what the initial value is?", () => {
      it("should not throw an error if you happen to set your text to the same value as the initial values.", () => {
        const trickyText = new Text("Tricky", {
          fontSize: 10,
          fontFamily: "arial",
        });
        expect(() => {
          const initialFontProps = getFontPropertiesOfText(trickyText, false);
          const actualFontProps = getFontPropertiesOfText(trickyText, true);
          expect(actualFontProps).toMatchObject(initialFontProps);
        }).not.toThrowError();
      });

      it("...however, it will throw if the fontSize is a string (rather than trying to convert it to pxs) unless you use force.", () => {
        const trickyText = new Text("Tricky", {
          fontSize: "0.688em",
          fontFamily: "arial",
        });
        expect(() => {
          getFontPropertiesOfText(trickyText, false);
        }).toThrowError();

        expect(() => {
          getFontPropertiesOfText(trickyText, true);
        }).not.toThrowError();
      });
    });
  });

  describe("fontSizeStringToNumber", () => {
    describe("Converts different text based font sizes to a pixel number. everything is based on 16px as the base.", () => {
      it("Converts rems and ems to px", () => {
        expect(fontSizeStringToNumber("1rem")).toBeCloseTo(16);
        expect(fontSizeStringToNumber("1em")).toBeCloseTo(16);
        expect(fontSizeStringToNumber("3em")).toBeCloseTo(48);
      });
      it("Converts % to px", () => {
        expect(fontSizeStringToNumber("100%")).toBeCloseTo(16);
        expect(fontSizeStringToNumber("200%")).toBeCloseTo(32);
      });
      it("Converts pt to px", () => {
        expect(fontSizeStringToNumber("10pt")).toBeCloseTo(13.281472);
        expect(fontSizeStringToNumber("20pt")).toBeCloseTo(26.562945);
      });
      it("Converts px to px", () => {
        expect(fontSizeStringToNumber("16.0px")).toBe(16.0);
        expect(fontSizeStringToNumber("100px")).toBe(100);
      });
    });
  });
});
