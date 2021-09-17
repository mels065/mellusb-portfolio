module.exports = {
    format_date(date) {
        return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    },
    generate_project_placement(is_showcase) {
        return is_showcase ? "is-full" : "is-one-third-desktop is-half-tablet is-full-mobile"
    },
    generate_collaborators(collaborators) {
        if (collaborators.length > 0) {
            return collaborators.map(
                ({ github_name }) =>
                    `<a class="has-text-black has-text-weight-bold is-size-6" href="https://www.github.com/${github_name}">${github_name}</a>`
            ).join(", ");
        } else {
            return 'None';
        }
    },
    generate_screenshot(has_screenshot, repo) {
        if (has_screenshot) {
            return `/images/projects/${repo}.png`;
        } else {
            return `/images/projects/placehold.png`;
        }
    }
};
