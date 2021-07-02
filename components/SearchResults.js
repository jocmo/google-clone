import PaginationButtons from '../components/PaginationButtons'


function SearchResults({ results }) {
    let totalResults = results.searchInformation.formattedTotalResults;
    let totalTime = results.searchInformation.formattedSearchTime;
    return (
        <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-md mb-5 mt-3">About {totalResults} results ({totalTime} seconds)</p>
            {results.items?.map((result) =>(
                <div key={result.link}
                className="max-w-xl mb-8">
                    <div className="group">
                        <a href={result.link} className="text-sm">{result.formattedUrl} </a>
                        <a href={result.link} className="truncate text-xl text-blue-800 font-medium group-hover:underline"><h2>{result.title}</h2> </a>
                    </div>
                    <p className="line-clamp-1 sm:line-clamp-3">
                        {result.snippet}
                    </p>
                </div>
            ))}
            <PaginationButtons/>
        </div>
    )
}

export default SearchResults
