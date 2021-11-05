import { IconProps } from './Icons/types'

export enum IconName {
  ACTIVITY = 'activity',
  AIRDROP = 'airdrop',
  ALERT = 'alert',
  ANDROID = 'android',
  APPLE = 'apple',
  ARROW_DOWN = 'arrow-down',
  ARROW_LEFT = 'arrow-left',
  ARROW_RIGHT = 'arrow-right',
  ARROW_UP = 'arrow-up',
  BACKSPACE = 'backspace',
  BACKUP = 'backup',
  BANK = 'bank',
  BLOCKCHAIN = 'blockchain',
  BLOCKCHAIN_CIRCLE = 'blockchain-circle',
  CALENDAR = 'calendar',
  CALL = 'call',
  CAMERA = 'camera',
  CART = 'cart',
  CHART = 'chart',
  CHART_BUBBLES = 'chart-bubbles',
  CHART_PIE = 'chart-pie',
  CHECK = 'check',
  CHECK_CIRCLE = 'check-circle',
  CHEVRON_DOWN = 'chevron-down',
  CHEVRON_LEFT = 'chevron-left',
  CHEVRON_RIGHT = 'chevron-right',
  CHEVRON_UP = 'chevron-up',
  CLIPBOARD = 'clipboard',
  CLOSE = 'close',
  CLOSE_CIRCLE = 'close-circle',
  CLOSE_CIRCLE_V2 = 'close-circle-v2',
  CLOSE_V2 = 'close-v2',
  COLOR_PICKER = 'color-picker',
  COMMENT = 'comment',
  COMPONENTS = 'components',
  COMPUTER = 'computer',
  COPY = 'copy',
  CREDIT_CARD = 'credit-card',
  DELETE = 'delete',
  DEPOSIT = 'deposit',
  DOWNLOAD = 'download',
  EDIT = 'edit',
  EDUCATION = 'education',
  EMAIL = 'email',
  ERROR = 'error',
  EXCHANGE = 'exchange',
  EXPANDLESS = 'expandless',
  EXPANDMORE = 'expandmore',
  EXPLORE = 'explore',
  FACEID = 'faceid',
  FAVORITE = 'favorite',
  FILTER = 'filter',
  FINGERPRINT = 'fingerprint',
  FLAG = 'flag',
  FLASHOFF = 'flashoff',
  FLASHON = 'flashon',
  FULLSCREEN = 'fullscreen',
  FULLSCREEN_EXIT = 'fullscreen-exit',
  GLOBE = 'globe',
  GOOGLE_TRANSLATE = 'google-translate',
  HARDWARE = 'hardware',
  HISTORY = 'history',
  HOME = 'home',
  IDENTIFICATION = 'identification',
  INFORMATION = 'information',
  KEY = 'key',
  KEYBOARD = 'keyboard',
  LAPTOP = 'laptop',
  LEGAL = 'legal',
  LINE_CHART_UP = 'line-chart-up',
  LINK = 'link',
  LIST_BULLET = 'list-bullet',
  LOADING = 'loading',
  LOCK = 'lock',
  LOGOUT = 'logout',
  MARKETUP = 'marketup',
  MENU = 'menu',
  MICROPHONE = 'microphone',
  MINUS_CIRCLE = 'minus-circle',
  MONEY_USD = 'money-usd',
  MORE_HORIZONTAL = 'more-horizontal',
  MORE_VERTICAL = 'more-vertical',
  NEW_WINDOW = 'new-window',
  NOTIFICATION = 'notification',
  NOTIFICATION_OFF = 'notification-off',
  PAPERCLIP = 'paperclip',
  PENDING = 'pending',
  PEOPLE = 'people',
  PHONE = 'phone',
  PLACEHOLDER = 'placeholder',
  PLAY_CIRCLE = 'play-circle',
  PLUS = 'plus',
  PLUS_CIRCLE = 'plus-circle',
  PORTFOLIO = 'portfolio',
  PRESENT = 'present',
  PRINT = 'print',
  PRIVATE = 'private',
  QRCODE = 'qrcode',
  QUESTION = 'question',
  QUESTION_CIRCLE = 'question-circle',
  RECEIVE = 'receive',
  REFRESH = 'refresh',
  REPEAT = 'repeat',
  REWARDS = 'rewards',
  REWARDS_CIRCLE = 'rewards-circle',
  SEARCH = 'search',
  SECURITY = 'security',
  SELL = 'sell',
  SEND = 'send',
  SETTINGS = 'settings',
  SHARE_ANDROID = 'share-android',
  SHARE_IOS = 'share-ios',
  SIGNOUT = 'signout',
  SUBDIRECTORY = 'subdirectory',
  SUPPORT = 'support',
  SWAP = 'swap',
  SYNC = 'sync',
  TAG_SELL = 'tag-sell',
  TIMEOUT = 'timeout',
  TOR = 'tor',
  TRADE = 'trade',
  TRANSACT = 'transact',
  TRANSACT_CLOSE = 'transact-close',
  TRIANGLE_DOWN = 'triangle-down',
  TRIANGLE_UP = 'triangle-up',
  UNFOLD_LESS = 'unfold-less',
  UNFOLD_MORE = 'unfold-more',
  UNLOCKED = 'unlocked',
  USER = 'user',
  USER_ADD = 'user-add',
  VERIFIED = 'verified',
  VISIBILITY_OFF = 'visibility-off',
  VISIBILITY_ON = 'visibility-on',
  WALLET = 'wallet',
  WITHDRAW = 'withdraw',
}

type IconSize = 'sm' | 'md' | 'lg'

export type IconPropsType = IconProps & { name: IconName; size?: IconSize }