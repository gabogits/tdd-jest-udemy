//Automatic mock

import soundPlayer from './soundPlayer';
import soundPlayerConsumer from './soundPlayerConsumer';

jest.mock('./sound-player'); // soundPlayer is now a mock constructor

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  soundPlayer.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
  const soundPlayerConsumer = new soundPlayerConsumer();
  expect(soundPlayer).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  // Show that mockClear() is working:
  expect(soundPlayer).not.toHaveBeenCalled();

  const soundPlayerConsumer = new soundPlayerConsumer();
  // Constructor should have been called again:
  expect(soundPlayer).toHaveBeenCalledTimes(1);

  const coolSoundFileName = 'song.mp3';
  soundPlayerConsumer.playSomethingCool();

  // mock.instances is available with automatic mocks:
  const mocksoundPlayerInstance = soundPlayer.mock.instances[0];
  const mockPlaySoundFile = mocksoundPlayerInstance.playSoundFile;
  expect(mockPlaySoundFile.mock.calls[0][0]).toEqual(coolSoundFileName);
  // Equivalent to above check:
  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);
});