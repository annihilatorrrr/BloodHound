import { vi } from 'vitest';
import * as hooks from '../../../hooks';
import { render, screen } from '../../../test-utils';
import { SelectedHighlight } from './SelectedHighlight';

vi.mock('../../../hooks', () => ({
    usePZPathParams: vi.fn(),
}));

const mockUsePZPathParams = hooks.usePZPathParams as unknown as ReturnType<typeof vi.fn>;

describe('SelectedHighlight', () => {
    afterEach(() => {
        vi.resetAllMocks();
    });

    it('renders highlight for the active tag', () => {
        mockUsePZPathParams.mockReturnValue({
            tagId: '1',
            selectorId: undefined,
            memberId: undefined,
        });

        render(<SelectedHighlight itemId='1' type='tag' />);

        expect(screen.getByTestId('privilege-zones_details_tags-list_active-tags-item-1')).toBeInTheDocument();
    });

    it('does not render highlight for non-active tag', () => {
        mockUsePZPathParams.mockReturnValue({
            tagId: '2',
            selectorId: undefined,
            memberId: undefined,
        });

        render(<SelectedHighlight itemId='1' type='tag' />);

        expect(screen.queryByTestId('privilege-zones_details_tags-list_active-tags-item-1')).not.toBeInTheDocument();
    });

    it('renders highlight only for active selector when selectorId is present', () => {
        mockUsePZPathParams.mockReturnValue({
            tagId: '1',
            selectorId: '5',
            memberId: undefined,
        });

        const { rerender } = render(<SelectedHighlight itemId='5' type='selector' />);
        expect(
            screen.getByTestId('privilege-zones_details_selectors-list_active-selectors-item-5')
        ).toBeInTheDocument();

        rerender(<SelectedHighlight itemId='1' type='tag' />);
        expect(screen.queryByTestId('privilege-zones_details_tags-list_active-tags-item-1')).not.toBeInTheDocument();
    });

    it('renders highlight only for active member when memberId is present', () => {
        mockUsePZPathParams.mockReturnValue({
            tagId: '1',
            selectorId: '2',
            memberId: '3',
        });

        const { rerender } = render(<SelectedHighlight itemId='3' type='member' />);
        expect(screen.getByTestId('privilege-zones_details_members-list_active-members-item-3')).toBeInTheDocument();

        rerender(<SelectedHighlight itemId='2' type='selector' />);
        expect(
            screen.queryByTestId('privilege-zones_details_selectors-list_active-selectors-item-2')
        ).not.toBeInTheDocument();

        rerender(<SelectedHighlight itemId='1' type='tag' />);
        expect(screen.queryByTestId('privilege-zones_details_tags-list_active-tags-item-1')).not.toBeInTheDocument();
    });
});
