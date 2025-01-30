import { render, screen, waitFor, fireEvent, within } from '@testing-library/react';
import { vi } from 'vitest';
import MusicPlayer from '../MusicPlayer';
import { usePlaylistData } from '../hooks/usePlayListData.tsx';


vi.mock('@/hooks/UsePlayListData', () => ({
  usePlaylistData: vi.fn(),
}));

describe('MusicPlayer Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('shows loading skeleton when playlist data is loading', async () => {

    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [],
      loading: true,
    });

    console.log(usePlaylistData());

    render(<MusicPlayer />);


    await waitFor(() => {
      expect(screen.getByTestId('loading-skeleton-current')).toBeInTheDocument();
      expect(screen.getByTestId('loading-skeleton-playlist')).toBeInTheDocument();
    });
  });

  it('renders the playlist when data is loaded', async () => {

    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);

    await waitFor(() => {
      const items = screen.getAllByText('Painted in Blue');
      expect(items[0]).toBeInTheDocument();
    });
  });

  it('toggles shuffle mode when shuffle button is clicked', () => {

    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);


    const shuffleButton = screen.getByRole('button', { name: /shuffle/i });
    fireEvent.click(shuffleButton);


    expect(shuffleButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('plays the next song when the next button is clicked', () => {
    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);


    const currentlyPlayingSection = screen.getByTestId('currently-playing-section');
    expect(within(currentlyPlayingSection).getByText('Painted in Blue')).toBeInTheDocument();


    fireEvent.click(screen.getByRole('button', { name: /next/i }));


    expect(within(currentlyPlayingSection).getByText('Tidal Drift')).toBeInTheDocument();
  });

  it('plays the previous song when the previous button is clicked', async () => {

    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);


    fireEvent.click(screen.getByRole('button', { name: /next/i }));


    const currentlyPlayingSection = screen.getByTestId('currently-playing-section');
    expect(within(currentlyPlayingSection).getByText('Tidal Drift')).toBeInTheDocument();


    fireEvent.click(screen.getByRole('button', { name: /previous/i }));


    await waitFor(() => {
      expect(within(currentlyPlayingSection).getByText('Painted in Blue')).toBeInTheDocument();
    });
  });

  it('changes the current song when a song from the playlist is selected', () => {

    (usePlaylistData as ReturnType<typeof vi.fn>).mockReturnValue({
      data: [
        { id: 1, title: 'Painted in Blue', artist: 'Soul Canvas', duration: '5:55' },
        { id: 2, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
      ],
      loading: false,
    });

    render(<MusicPlayer />);


    const playlistSection = screen.getByTestId('playlist-section');


    fireEvent.click(within(playlistSection).getByText('Tidal Drift'));


    const currentlyPlayingSection = screen.getByTestId('currently-playing-section');
    expect(within(currentlyPlayingSection).getByText('Tidal Drift')).toBeInTheDocument();
  });


});