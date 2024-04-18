import { render, screen } from "@testing-library/react";
import Footer from "../components/footer/Footer"
import { expect, test, describe, beforeEach } from 'vitest';

describe("Footer testing", () => {
    beforeEach(() => {
        render(<Footer />)
    })

    test('render Footer', () => {
        const copyrightFooter = screen.getByText(/© Copyright Nexus News 2024/i);
        expect(copyrightFooter).toBeDefined();
    });
})