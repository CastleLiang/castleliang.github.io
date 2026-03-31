module Jekyll
  class BibtexCitationCountsGenerator < Generator
    safe true
    priority :low

    def generate(site)
      bib_file = site.config.dig('google_scholar_citations', 'bib_file') || 'papers.bib'
      bib_path = site.in_source_dir('_bibliography', bib_file)
      return unless File.exist?(bib_path)

      source = File.read(bib_path, encoding: 'utf-8')
      counts = {}

      source.scan(/@\w+\{([^,]+),(.+?)\n\}/m).each do |key, body|
        citation_match = body.match(/\bcitation\s*=\s*\{?(\d+)\}?/i)
        title_match = body.match(/\btitle\s*=\s*[{"'](.+?)["'}]\s*,/mi)
        next unless citation_match && title_match

        citation_value = citation_match[1].to_i
        title = title_match[1].strip
        normalized_title = normalize_title(title)

        counts[key.strip] = citation_value
        counts[title] = citation_value
        counts[normalized_title] = citation_value
      end

      site.data['bib_citation_counts'] = counts
    rescue StandardError => e
      Jekyll.logger.warn "BibtexCitationCounts:", "failed to parse bib file: #{e.message}"
    end

    private

    def normalize_title(title)
      title.to_s.strip.downcase.gsub(/\s+/, ' ')
    end
  end
end
