import * as Colors from './colors'
import * as Typography from './typography'

export const base = {
  alignItems: 'center',
};

export const text = {
  color: Colors.white,
  fontSize: Typography.smallestFontSize,
  fontWeight: 'bold',
  letterSpacing: 1,
}

export const textUnselected = {
  ...text,
  color: Colors.mediumGray,
}

export const small = {
  padding: 10,
}

export const rounded = {
  borderRadius: 4,
}

export const selected = {
  backgroundColor: Colors.selected,
}

export const unselected = {
  backgroundColor: Colors.unselected,
}

export const primary = {
  backgroundColor: Colors.primary,
  ...base,
  ...small,
  ...rounded,
};