import { render, fireEvent, screen } from '@testing-library/react';
import PlayControls from '@/components/PlayControls';
import { vi } from 'vitest';

test('changes speed when speed button is clicked', () => {
  render(
    <PlayControls
      onPrev={vi.fn()}
      onNext={vi.fn()}
      isFirstSong={false}
      isLastSong={false}
      onShuffleToggle={vi.fn()}
      isShuffle={false}
    />
  );

  const speedButton = screen.getByRole('button', { name: /Set play speed to/i });


  expect(speedButton).toHaveTextContent('1x');


  fireEvent.click(speedButton);
  expect(speedButton).toHaveTextContent('2x');


  fireEvent.click(speedButton);
  expect(speedButton).toHaveTextContent('3x');


  fireEvent.click(speedButton);
  expect(speedButton).toHaveTextContent('1x');
});

test('toggles play/pause state when button is clicked', () => {
  render(
    <PlayControls
      onPrev={vi.fn()}
      onNext={vi.fn()}
      isFirstSong={false}
      isLastSong={false}
      onShuffleToggle={vi.fn()}
      isShuffle={false}
    />
  );

  const playPauseButton = screen.getByRole('button', { name: /Pause/i });


  expect(playPauseButton).toHaveAttribute('aria-label', 'Pause');


  fireEvent.click(playPauseButton);
  expect(playPauseButton).toHaveAttribute('aria-label', 'Play');


  fireEvent.click(playPauseButton);
  expect(playPauseButton).toHaveAttribute('aria-label', 'Pause');
});